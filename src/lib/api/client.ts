import type { ApiResponse, MediaDetail, MediaItem } from '@type/api';

const BASE_URL = import.meta.env.PUBLIC_API_URL;

async function fetcher<T>(params: Record<string, string>): Promise<T> {
    const query = new URLSearchParams(params).toString();
    const url = `${BASE_URL}?${query}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export const api = {
    getTrending: (page = 1) =>
        fetcher<ApiResponse>({ action: 'trending', page: page.toString() }),

    getIndonesianMovies: (page = 1) =>
        fetcher<ApiResponse>({ action: 'indonesian-movies', page: page.toString() }),

    getIndonesianDrama: (page = 1) =>
        fetcher<ApiResponse>({ action: 'indonesian-drama', page: page.toString() }),

    getKdrama: (page = 1) =>
        fetcher<ApiResponse>({ action: 'kdrama', page: page.toString() }),

    getShortTv: (page = 1) =>
        fetcher<ApiResponse>({ action: 'short-tv', page: page.toString() }),

    getIndoDub: (page = 1) =>
        fetcher<ApiResponse>({ action: 'indo-dub', page: page.toString() }),

    getWesternTv: (page = 1) =>
        fetcher<ApiResponse>({ action: 'western-tv', page: page.toString() }),

    getAnime: (page = 1) =>
        fetcher<ApiResponse>({ action: 'anime', page: page.toString() }),

    search: (keyword: string, page = 1) =>
        fetcher<ApiResponse>({ action: 'search', q: keyword, page: page.toString() }),

    getDetail: (detailPath: string) =>
        fetcher<{ success: boolean; data?: MediaDetail; items?: MediaDetail[] }>({ action: 'detail', detailPath }),
};
