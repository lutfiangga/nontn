export const formatRating = (rating: number | string): string => {
    const num = typeof rating === 'string' ? parseFloat(rating) : rating;
    return isNaN(num) ? 'N/A' : num.toFixed(1);
};

export const getPlaceholderImage = (text = 'No Image') =>
    `https://via.placeholder.com/300x450?text=${encodeURIComponent(text)}`;

export const debounce = <T extends (...args: any[]) => any>(
    fn: T,
    delay: number
) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

export const extractDetailPath = (path: string | null | undefined): string => {
    if (!path) return "";

    // If it's a URL-like string or contains query params
    if (typeof path === 'string' && (path.includes("?") || path.includes("="))) {
        try {
            const queryString = path.includes("?") ? path.split("?")[1] : path;
            const params = new URLSearchParams(queryString);
            const extracted = params.get("detailPath") || params.get("path") || params.get("q");
            if (extracted) return extracted;
        } catch (e) { }

        // Fallback to regex
        const match = path.match(/(?:detailPath|path|q)=([^&]+)/);
        if (match) return decodeURIComponent(match[1]);
    }

    return String(path);
};
