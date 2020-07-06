import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from '@apollo/react-hooks'

import { App } from 'app'
import { GQLClient } from 'providers'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={GQLClient}>
            <CssBaseline />
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
