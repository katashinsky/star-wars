import {GraphQLClient} from 'graphql-request'

export const FILM_ENDPOINT = "http://starwars.asteria.ai/graphql"

export const filmClient = new GraphQLClient(FILM_ENDPOINT, { headers: {} })