export interface MediaItem {
    id: string;
    title: string;
    poster: string;
    rating: number | string;
    year: string;
    type: 'movie' | 'tv' | 'anime' | string;
    genre: string;
    detailPath: string;
}

export interface ApiResponse<T = MediaItem[]> {
    success: boolean;
    items: T;
    page?: number;
    hasMore?: boolean;
    message?: string;
}

export interface Episode {
    id: string;
    title: string;
    episode: string;
    path: string;
}

export interface Season {
    season: string;
    episodes: Episode[];
}

export interface MediaDetail extends MediaItem {
    description: string;
    duration?: string;
    director?: string;
    cast?: string;
    playerUrl: string;
    seasons?: Season[];
}
