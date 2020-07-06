import React, { FC, memo } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Typography from '@material-ui/core/Typography'

import { getPartyMorty, getPartyRick } from 'services'
import { PartyRickData, PartyMortyData } from 'types'
import { usePartyStyles } from './styles'

const PartyComponent: FC = () => {
    const { data: rickData } = useQuery<PartyRickData>(getPartyRick)
    const { data: mortyData } = useQuery<PartyMortyData>(getPartyMorty)

    const classes = usePartyStyles(
        rickData?.partyRick?.image,
        mortyData?.partyMorty?.image
    )()

    return (
        <div className={classes.root}>
            <Typography>Party</Typography>
            <div className={classes.slotsWrapper}>
                <div className={classes.rickSlot}>
                    <Typography>Rick</Typography>
                </div>
                <div className={classes.mortySlot}>
                    <Typography>Morty</Typography>
                </div>
            </div>
        </div>
    )
}

export const Party = memo(PartyComponent)
