import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { BIDE_ABI } from './bidelity.js'
import TOKEN_ABI from './token.json'

const BLID_ADDRESS = '0x99212bad63859e18b827b08f86c954dcdcfb4f7e'

export function getContract(address, ABI) {
    return new Contract(
        address,
        ABI,
        ethers.getDefaultProvider('https://ethereum-goerli.publicnode.com')
    )
}

export function getBidlityContract() {
    return getContract(BLID_ADDRESS, BIDE_ABI)
}

export async function getCurrency(address) {
    const token = getContract(address, TOKEN_ABI)
    const symbol = await token.symbol()
    return { symbol, id: address, name: symbol }
}
