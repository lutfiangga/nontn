import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
    const response = await next();
    const html = await response.text();

    const API_URL = import.meta.env.PUBLIC_API_URL;
    const apiOrigin = new URL(API_URL).origin;

    return new Response(html, {
        status: response.status,
        headers: {
            ...Object.fromEntries(response.headers),
            "Content-Security-Policy": `default-src 'self' ${apiOrigin}; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src 'self' ${apiOrigin};`,
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "SAMEORIGIN",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
        }
    });
});
