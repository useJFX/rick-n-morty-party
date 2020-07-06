import React, { FC, memo, useCallback, MouseEvent, useMemo } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import { addDeletedCard, getDeletedCards, inviteToParty } from 'services'
import {
    InviteToPartyRequest,
    InviteToPartyVariables,
    AddDeletedCardVariables,
    AddDeletedCardRequest,
} from 'types'
import { ResultProps, DeletedCards } from './types'
import { useResultsStyles } from './styles'

const ResultComponent: FC<ResultProps> = props => {
    const { data, loading } = props
    const classes = useResultsStyles()

    const { data: deletedCards } = useQuery<DeletedCards>(getDeletedCards)
    const [addDeletedCardRequest] = useMutation<
        AddDeletedCardRequest,
        AddDeletedCardVariables
    >(addDeletedCard)
    const [inviteToPartyRequest] = useMutation<
        InviteToPartyRequest,
        InviteToPartyVariables
    >(inviteToParty)

    const deletedCardsIds = useMemo(
        () => deletedCards?.deletedCards.map(({ id }) => id),
        [deletedCards]
    )

    const imageHandler = useCallback(
        (name: string, image: string) => () =>
            inviteToPartyRequest({ variables: { name, image } }),
        [inviteToPartyRequest]
    )
    const crossButtonHandler = useCallback(
        (event: MouseEvent, id: string) => {
            event.stopPropagation()
            addDeletedCardRequest({ variables: { id } })
        },
        [addDeletedCardRequest]
    )

    return (
        <>
            {data && (
                <div className={classes.resultWrapper}>
                    {data.characters.results
                        .filter(({ id }) => !deletedCardsIds?.includes(id))
                        .map(({ id, image, name }) => (
                            <div
                                className={classes.imageWrapper}
                                key={id}
                                onClick={imageHandler(name, image)}
                                style={{ backgroundImage: `url(${image})` }}
                            >
                                <IconButton
                                    className={classes.crossButton}
                                    component="span"
                                    onClick={(e: MouseEvent) =>
                                        crossButtonHandler(e, id)
                                    }
                                    size="small"
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        ))}
                </div>
            )}
            {loading && (
                <div className={classes.progressWrapper}>
                    <CircularProgress size={80} thickness={2} />
                </div>
            )}
        </>
    )
}

export const Result = memo(ResultComponent)
