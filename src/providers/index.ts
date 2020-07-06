import ApolloClient, { InMemoryCache } from 'apollo-boost'

import { resolvers } from './resolvers'

const cache = new InMemoryCache()

const GQLClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache,
    resolvers,
})

cache.writeData({
    data: {
        deletedCards: [],
        partyRick: null,
        partyMorty: null,
    },
})

export { GQLClient }
