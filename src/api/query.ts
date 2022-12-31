import { useQuery } from 'react-query';
import { MediaTypes, RequestResponse } from './schema';
import { request, gql } from 'graphql-request';

export const baseURL = 'https://graphql.anilist.co/';

export const useMediaQueryList = (
    page: string,
    type: MediaTypes,
    enabled?: boolean
) => {
    const MEDIA_PAGE_QUERY = gql`{
        Page(page: ${page}, perPage: 12) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ${type}, sort: POPULARITY_DESC) {
                id
                coverImage {
                    color
                    extraLarge
                }
                title {
                    english
                    romaji
                    native
                }
            }
        }
    }`;
    return useQuery({
        queryKey: ['Media Page'],
        queryFn: async () =>
            request<RequestResponse>(baseURL, MEDIA_PAGE_QUERY),
        enabled,
    });
};
