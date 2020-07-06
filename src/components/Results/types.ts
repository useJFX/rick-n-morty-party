import { CharactersQueryResponse } from 'types'

export interface ResultProps {
    data: CharactersQueryResponse | undefined
    loading: boolean
}

export interface DeletedCards {
    deletedCards: Card[]
}

export interface Card {
    id: string
    __typename?: string
}
