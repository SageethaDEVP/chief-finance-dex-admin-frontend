import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { useChainId } from './hooks/useChainId'
import { graphUrls } from './constants'

export const Provider = () => {
    const { chainId, setChainId } = useChainId()
    console.log({ chainId, setChainId })

    const apolloClient = new ApolloClient({
        // uri: 'https://api.thegraph.com/subgraphs/name/alexsandrbarabash/test-2',
        // uri: 'https://api.thegraph.com/subgraphs/name/yash-khatri-minddeft/chief-finance-graph',
        uri: graphUrls[chainId],
        cache: new InMemoryCache(),
    })
    console.log({ apolloClient })
    return (
        <ApolloProvider client={apolloClient}>
            <HashRouter>
                <App />
            </HashRouter>
        </ApolloProvider>
    )
}
