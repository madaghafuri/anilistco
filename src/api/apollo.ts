import { ApolloClient, gql, useQuery } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { MediaTypes } from './type';

export const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
});

export const useMediaQueryList = (page: number, type: MediaTypes) => {
    const MEDIA_PAGE_QUERY = gql`{
        Page(page: ${page}, perPage: 12) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: ${type}, sort: TRENDING_DESC) {
                id
                coverImage {
                    color
                }
                title {
                    english
                    romaji
                    native
                }
                status
                nextAiringEpisode {
                    episode
                    timeUntilAiring
                }
                studios
                meanScore
                format
                episodes
                genre
            }
        }
    }`;
    return useQuery(MEDIA_PAGE_QUERY);
};
