export type MediaTypes = 'ANIME' | 'MANGA' | undefined;

export interface RequestResponse {
    Page: PageInfo;
}

export interface PageInfo {
    pageInfo: {
        currentPage: number;
        hasNextPage: boolean;
        lastPage: number;
    };
    media: Media[];
}

export interface Media {
    id: number;
    coverImage: {
        extraLarge: string;
        large: string;
        medium: string;
        color: string;
    };
    title: {
        english: string;
        romaji: string;
        userPreferred: string;
    };
    description: string;
}
