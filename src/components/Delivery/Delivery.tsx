import React, { FC, memo, useState, useCallback, ChangeEvent } from 'react'
import throttle from 'lodash.throttle'
import { useLazyQuery } from '@apollo/react-hooks'

import { getCharacters } from 'services'
import { Result, Input } from 'components'
import { CharactersQueryResponse, CharactersQueryVariables } from 'types'
import { useDeliveryStyles } from './styles'

const minSymbolsForRequest = 2
const throttleDelay = 300

const DeliveryComponent: FC = () => {
    const classes = useDeliveryStyles()

    const [inputValue, setInputValue] = useState<string>('')
    const [loadCharacters, { loading, data }] = useLazyQuery<
        CharactersQueryResponse,
        CharactersQueryVariables
    >(getCharacters)

    const throttledFunc = useCallback(
        throttle((name: string) => {
            loadCharacters({ variables: { name } })
        }, throttleDelay),
        []
    )

    const inputHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target
            setInputValue(value)
            value.length > minSymbolsForRequest && throttledFunc(value)
        },
        [throttledFunc]
    )
    return (
        <div className={classes.root}>
            <Input onChangeHandler={inputHandler} value={inputValue} />
            <Result data={data} loading={loading} />
        </div>
    )
}

export const Delivery = memo(DeliveryComponent)
