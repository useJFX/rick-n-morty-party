import React, { FC, memo } from 'react'
import TextField from '@material-ui/core/TextField'

import { InputProps } from './types'
import { useInputStyles } from './styles'

const InputComponent: FC<InputProps> = props => {
    const { value, onChangeHandler } = props
    const classes = useInputStyles()

    return (
        <TextField
            className={classes.input}
            onChange={onChangeHandler}
            value={value}
            variant="outlined"
            autoFocus
            fullWidth
        />
    )
}

export const Input = memo(InputComponent)
