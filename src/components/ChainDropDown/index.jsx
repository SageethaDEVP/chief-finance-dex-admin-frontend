import React, { useRef } from 'react'
import styled from 'styled-components'
import binance from '../../assets/img/binance.png'
import sepolia from '../../assets/img/ethereum-logo.png'
import polygon from '../../assets/img/polygon.svg'
import arbitrum from '../../assets/img/arbitrum.png'
import fantom from '../../assets/img/fantom.png'
import avalance from '../../assets/img/Avalance.png'
import optimism from '../../assets/img/Optimism.png'
import base from '../../assets/img/base.png'
import Celo from '../../assets/img/celo.png'
import Linea from '../../assets/img/LINEA.png'
import Blast from '../../assets/img/Blast.png'
import Aurora from '../../assets/img/Aurora.png'
import Scroll from '../../assets/img/scroll.png'
import MoonbaseAlpha from '../../assets/img/moonbeam.webp'

import { useChainId } from '../../hooks/useChainId'
import { TEXT } from '../../theme'
import { useOnClickOutside } from '../../hooks/useOutsideClick'

const DropdownWrapper = styled.div`
    z-index: 1;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 70px;
    right: 108px;
    width: 150px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    cursor: pointer;
`

const DropdownItem = styled.div`
    width: 100%;
    background-color: #323540;
    padding: 8px 10px;
    display: flex;

    :hover {
        cursor: pointer;
        background-color: #414553;
    }
`

const Separator = styled.div`
    background-color: #414553;
    width: 100%;
    height: 1px;
`

export default function ChainDropDownAccountDropdown({
    isVisible,
    closeDropdown,
}) {
    const { setChainId } = useChainId()
    const node = useRef(null)

    const handleChain = (chainId) => {
        console.log('chainchange')
        // switchChain(chainId)
        setChainId(chainId)
        closeDropdown()
    }

    const dropdownItems = [
        {
            chainId: 11155111,
            imageSrc: sepolia,
            altText: 'Sepolia Testnet',
            label: 'Sepolia Testnet',
        },
        {
            chainId: 97,
            imageSrc: binance,
            altText: 'Binance Testnet',
            label: 'Binance Testnet',
        },
        {
            chainId: 80002,
            imageSrc: polygon,
            altText: 'polygon Testnet',
            label: 'polygon Testnet',
        },
        {
            chainId: 421614,
            imageSrc: arbitrum,
            altText: 'arbitrum Testnet',
            label: 'arbitrum Testnet',
        },
        {
            chainId: 4002,
            imageSrc: fantom,
            altText: 'fantom Testnet',
            label: 'fantom Testnet',
        },
        {
            chainId: 43113,
            imageSrc: avalance,
            altText: 'Binance Testnet',
            label: 'Binance Testnet',
        },
        {
            chainId: 420,
            imageSrc: optimism,
            altText: 'optimism Testnet',
            label: 'optimism Testnet',
        },
        {
            chainId: 59144,
            imageSrc: Linea,
            altText: 'Linea Testnet',
            label: 'Linea Testnet',
        },
        {
            chainId: 84531,
            imageSrc: base,
            altText: 'Base Testnet',
            label: 'Base Testnet',
        },
        {
            chainId: 44787,
            imageSrc: Celo,
            altText: 'Celo Testnet',
            label: 'Celo Testnet',
        },
        {
            chainId: 23888,
            imageSrc: Blast,
            altText: 'Blast Testnet',
            label: 'Blast Testnet',
        },
        {
            chainId: 1313161555,
            imageSrc: Aurora,
            altText: 'Aurora Testnet',
            label: 'Aurora Testnet',
        },
        {
            chainId: 534352,
            imageSrc: Scroll,
            altText: 'Scroll Testnet',
            label: 'Scroll Testnet',
        },
        {
            chainId: 1287,
            imageSrc: MoonbaseAlpha,
            altText: 'Moonbase Alpha Testnet',
            label: 'Moonbase Alpha Testnet',
        },
    ]

    useOnClickOutside(node, isVisible ? closeDropdown : undefined)

    return (
        <>
            {isVisible && (
                <DropdownWrapper ref={node}>
                    {dropdownItems.map((item, index) => (
                        <div key={item.id}>
                            <DropdownItem
                                onClick={() => {
                                    handleChain(item.chainId)
                                }}
                            >
                                <ItemWrapper>
                                    <img
                                        style={{
                                            maxWidth: '25px',
                                        }}
                                        src={item.imageSrc}
                                        alt={item.altText}
                                    />
                                    <TEXT.default
                                        fontSize={12}
                                        fontWeight={500}
                                        style={{
                                            color: 'white',
                                            margin: '3px',
                                        }}
                                    >
                                        {item.label}
                                    </TEXT.default>
                                </ItemWrapper>
                            </DropdownItem>
                            {index < dropdownItems.length - 1 && <Separator />}
                        </div>
                    ))}
                </DropdownWrapper>
            )}
        </>
    )
}

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
`
