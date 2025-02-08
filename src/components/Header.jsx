import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import { IoIosArrowDown } from 'react-icons/io'
import LogoIcon from '../assets/img/logo-white.png'
import LogoutIcon from '../assets/svg/logout.svg'
import { TEXT } from '../theme'
import { ROUTES } from '../router/constants/routes'
import { useAuth } from '../hooks/useAuth'
import { useUserStore } from '../store/userStore'
import { useChainId } from '../hooks/useChainId'
import { Centered, Image, RowBetween } from './styled'
import ChainDropDown from './ChainDropDown'
import cautionImage from './../assets/img/caution.png'
import ethereumLogo from './../assets/img/ethereum-logo.png'
import binanceLogo from './../assets/img/binance.png'
import amoyLogo from './../assets/img/polygon.svg'
import arbitrumLogo from './../assets/img/arbitrum.png'
import fantomLogo from './../assets/img/fantom.png'
import avalanceLogo from './../assets/img/Avalance.png'
import OptimismLogo from './../assets/img/Optimism.png'
import Linea from './../assets/img/LINEA.png'
import Base from './../assets/img/base.png'
import Celo from './../assets/img/celo.png'
import Blast from './../assets/img/Blast.png'
import Aurora from './../assets/img/Aurora.png'
import Scroll from './../assets/img/scroll.png'
import MoonbaseAlpha from './../assets/img/moonbeam.webp'

const Title = styled.a`
    display: flex;
    align-items: center;
    pointer-events: auto;
    justify-self: flex-start;
    margin-right: 0.75rem;
    text-decoration: none;
    ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
    :hover {
        cursor: pointer;
    }
`

const HeaderFrame = styled(RowBetween)`
    padding: 16px 20px;
    background-color: ${({ theme }) => theme.bg2};
`

const UserNameText = styled.p`
    color: ${({ theme }) => theme.text1};
    font-weight: 600;
    font-size: 14px;
    margin-right: 16px;
    cursor: pointer;
`

const Header = () => {
    const { logout } = useAuth()
    const { user } = useUserStore(({ user }) => ({ user }), shallow)
    const navigate = useNavigate()
    const navigateToAccount = () => navigate(ROUTES.account)
    const { chainId } = useChainId()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen((prev) => !prev)
    }, [])

    const closeDropdown = useCallback(() => {
        setIsDropdownOpen(false)
    }, [])

    const logoMap = {
        11155111: ethereumLogo,
        97: binanceLogo,
        80002: amoyLogo,
        421614: arbitrumLogo,
        4002: fantomLogo,
        43113: avalanceLogo,
        420: OptimismLogo,
        59144: Linea,
        84531: Base,
        44787: Celo,
        23888: Blast,
        1313161555: Aurora,
        534352: Scroll,
        1287: MoonbaseAlpha,
    }

    const imageLogo = logoMap[chainId] || cautionImage
    return (
        <HeaderFrame>
            <Title href="/">
                <img width="44px" height="42px" src={LogoIcon} alt="logo" />
                <TEXT.white fontWeight={800} fontSize={20} marginLeft="8px">
                    Chief Finance
                </TEXT.white>
            </Title>
            {user !== null ? (
                <Centered>
                    <ChainSwitch onClick={toggleDropdown}>
                        <img
                            style={{ width: '25px' }}
                            src={imageLogo}
                            alt="logo"
                        />
                        <span>{isDropdownOpen}</span>
                        {/* <img className="arrow" src={down} alt="down" /> */}
                        {/* <button style={{ padding: 0 }}> */}
                        <IoIosArrowDown style={{ color: 'white' }} />
                        {/* </button> */}
                    </ChainSwitch>
                    <ChainDropDown
                        closeDropdown={closeDropdown}
                        isVisible={isDropdownOpen}
                    />
                    <UserNameText onClick={navigateToAccount}>
                        {user?.name}
                    </UserNameText>
                    <Image
                        onClick={logout}
                        width="24px"
                        height="24px"
                        src={LogoutIcon}
                        alt="logo"
                    />
                </Centered>
            ) : (
                <div />
            )}
        </HeaderFrame>
    )
}

export default Header

const ChainSwitch = styled.div`
    padding: 0 11px;
    color: #ffffff;
    height: 45px;
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #ffffff;
    margin-right: 20px;
    font-weight: 600;
    cursor: pointer;
    img:not(.arrow) {
        margin: 0 7px 0 0;
    }
    .arrow {
        width: 12px;
        margin: 0 0 0 13px;
    }
    &:hover {
        border-color: var(--primary);
    }
`
