export interface Results {
    id: string
    image: string
    name: string
}

export interface CharactersQueryResponse {
    characters: {
        results: Results[]
    }
}

export interface CharactersQueryVariables {
    name: string
}

export interface AddDeletedCardRequest {
    addDeletedCard: {
        id: number
    }
}

export interface AddDeletedCardVariables {
    id: string
}

export interface InviteToPartyRequest {
    inviteToParty: PartyData
}

export interface InviteToPartyVariables {
    name: string
    image: string
}

export interface PartyRickData {
    partyRick: PartyData
}
export interface PartyMortyData {
    partyMorty: PartyData
}

export interface PartyData {
    name: string
    image: string
}
