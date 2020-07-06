import { ChangeEvent } from 'react'

export interface InputProps {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
}
