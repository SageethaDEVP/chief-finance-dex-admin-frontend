import { isMobile } from 'react-device-detect'
import { toHex } from 'web3-utils'

export async function switchChain(chainId) {
    if (!window.ethereum) {
        isMobile && alert('Change network in your application')
    }
    try {
        await window.ethereum?.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: toHex(chainId) }],
        })
    } catch (error) {
        if (error.code === 4902 || error.code === -32603) await addNetwork()
        console.error('error while switching networks')
    }
}
