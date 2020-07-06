import React, { FC, memo } from 'react'

import { Delivery, Party } from 'components'
import { useAppStyles } from './styles'

const AppComponent: FC = () => {
    const classes = useAppStyles()

    return (
        <div className={classes.root}>
            <Delivery />
            <Party />
        </div>
    )
}

export const App = memo(AppComponent)
