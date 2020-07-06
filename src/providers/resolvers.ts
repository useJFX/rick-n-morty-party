import { getDeletedCards } from 'services'
import { InviteToPartyVariables, AddDeletedCardVariables } from 'types'

export const resolvers = {
    Mutation: {
        addDeletedCard: (
            _: any,
            { id }: AddDeletedCardVariables,
            { cache }: any
        ) => {
            const { deletedCards } = cache.readQuery({
                query: getDeletedCards,
            })
            const newDeletedCard = {
                id,
                __typename: 'deletedCard',
            }

            cache.writeData({
                data: {
                    deletedCards: [...deletedCards, newDeletedCard],
                },
            })
        },
        inviteToParty: (
            _: any,
            { name, image }: InviteToPartyVariables,
            { cache }: any
        ) => {
            if (name.toLowerCase().includes('rick')) {
                cache.writeData({
                    data: {
                        partyRick: {
                            name,
                            image,
                            __typename: 'partyRick',
                        },
                    },
                })
            }
            if (name.toLowerCase().includes('morty')) {
                cache.writeData({
                    data: {
                        partyMorty: {
                            name,
                            image,
                            __typename: 'partyMorty',
                        },
                    },
                })
            }
        },
    },
}
