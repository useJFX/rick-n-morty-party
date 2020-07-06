import { gql } from 'apollo-boost'

const getCharacters = gql`
    query getCharacters($name: String, $page: Int) {
        characters(page: $page, filter: { name: $name }) {
            results {
                id
                image
                name
            }
        }
    }
`

const getDeletedCards = gql`
    query {
        deletedCards @client {
            id
        }
    }
`
const addDeletedCard = gql`
    mutation($id: Int!) {
        addDeletedCard(id: $id) @client
    }
`

const inviteToParty = gql`
    mutation($name: String!, $image: String!) {
        inviteToParty(name: $name, image: $image) @client
    }
`

const getPartyRick = gql`
    query {
        partyRick @client {
            name
            image
        }
    }
`

const getPartyMorty = gql`
    query {
        partyMorty @client {
            name
            image
        }
    }
`

export {
    getCharacters,
    getDeletedCards,
    addDeletedCard,
    inviteToParty,
    getPartyRick,
    getPartyMorty,
}
