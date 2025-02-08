import React, { createContext, useContext, useState } from 'react'

const ChainContext = createContext({})
function ChainIdProvider({ children }) {
    const [chainId, setChainId] = useState(11155111)
    return (
        <ChainContext.Provider value={{ chainId, setChainId }}>
            {children}
        </ChainContext.Provider>
    )
}
export const useChainId = () => {
    const data = useContext(ChainContext)
    if (!data) {
        throw new Error('Hooks can only be called within its provider')
    }
    return data
}
export default ChainIdProvider
