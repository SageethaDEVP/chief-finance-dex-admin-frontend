import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ApolloClient, InMemoryCache } from '@apollo/client'
// import App from './App'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import ChainIdProvider from './hooks/useChainId'
import { Provider } from './provider'

// export const apolloClient = new ApolloClient({
//     // uri: 'https://api.thegraph.com/subgraphs/name/alexsandrbarabash/test-2',
//     uri: 'https://api.thegraph.com/subgraphs/name/yash-khatri-minddeft/chief-finance-graph',
//     cache: new InMemoryCache(),
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <FixedGlobalStyle />
        <ThemeProvider>
            <ThemedGlobalStyle />
            <div id="portal" />
            <ChainIdProvider>
                <Provider />
            </ChainIdProvider>
        </ThemeProvider>
    </>
)
