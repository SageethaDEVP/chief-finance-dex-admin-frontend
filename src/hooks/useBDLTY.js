import { useCallback } from 'react'
import { Contract, ethers } from 'ethers'
import { TOKEN_ABI } from '../constants/token-abi'

const rpcUrl = process.env.REACT_APP_RPC_URL

export function useBDLTY() {
    const TOKEN_ADDRESS = process.env.REACT_APP_BDLTY_TOKEN_ADDRESS

    const token = new Contract(
        TOKEN_ADDRESS,
        TOKEN_ABI,
        new ethers.providers.JsonRpcProvider(rpcUrl)
    )

    const getTotalSupply = useCallback(async () => {
        try {
            const totalSupply = await token.totalSupply()
            return ethers.utils.formatEther(totalSupply)
        } catch (err) {
            console.error(err)
        }
    }, [])

    const checkIsPaused = useCallback(async () => {
        try {
            return await token.paused()
        } catch (err) {
            console.error(err)
        }
    }, [])

    return {
        getTotalSupply,
        checkIsPaused,
    }
}
