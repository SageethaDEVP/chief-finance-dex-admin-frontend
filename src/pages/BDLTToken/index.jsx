import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { shallow } from 'zustand/shallow'
import { AutoColumn, Flex } from '../../components/styled'
import { TEXT } from '../../theme'
import { InfoSection } from '../../components/StyledSection'
import Toggle from '../../components/Toggle'
import Title from '../../components/Title'
import { useUserStore } from '../../store/userStore'
import { MANAGE_BDLTY_TOKEN } from '../../constants/roles'
import { useBDLTY } from '../../hooks/useBDLTY'
import { useBdltyService } from '../../hooks/useBdltyService'
import CopyWindow from '../../components/CopyWindow'
import { useCopy } from '../../hooks/useCopy'
import BDLTInputSection from './components/BDLTInputSection'

const Section = styled(InfoSection)`
    border-radius: 10px;
    padding: 16px 16px 20px;
    border: 1px solid ${({ theme }) => theme.border3};
`

const InnerSection = styled(Section)`
    padding: 24px;
`

const StyledLink = styled.a`
    width: fit-content;
    text-decoration: underline;
    color: ${({ theme }) => theme.textBlue};
    font-size: 12px;
    font-weight: 600;
    line-height: 20.4px;
    cursor: pointer;
`

const ToggleSection = styled.div`
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
`

const BDLTToken = () => {
    const { setMint, setBurn, pauseContract, unpauseContract, getBurned } =
        useBdltyService()
    const { getTotalSupply, checkIsPaused } = useBDLTY()
    const { user } = useUserStore(({ user }) => ({ user }), shallow)
    const hasRole = user.roles.find((role) => role.name === MANAGE_BDLTY_TOKEN)

    const [issued, setIssued] = useState(0)
    const [burned, setBurned] = useState(0)
    const [total, setTotal] = useState(0)
    const [burnedTokens, setBurnedTokens] = useState(0)
    const [pause, setPause] = useState(false)

    const getTotalIssued = async () => {
        const data = await getTotalSupply()
        if (data) {
            setTotal(data)
        }
    }

    const getBurnedTokens = async () => {
        const burnedValue = await getBurned()
        if (burnedValue) {
            setBurnedTokens(burnedValue)
        }
    }

    const updateValues = () => {
        getTotalIssued()
        getBurnedTokens()
    }

    const getIsPaused = async () => {
        const isPaused = await checkIsPaused()
        setPause(isPaused)
    }

    const toggleContract = (value) => {
        if (!value) {
            unpauseContract()
        } else if (value) {
            pauseContract()
        }
        setPause(value)
    }

    useEffect(() => {
        getTotalIssued()
        getIsPaused()
        getBurnedTokens()
    }, [])

    const {
        isCopied: isMintSuccess,
        closeCopyWindow: closeIsMintSuccessWindow,
        openCopyWindow: openIsMintSuccessWindow,
    } = useCopy()

    const {
        isCopied: isBurnSuccess,
        closeCopyWindow: closeIsBurnSuccessWindow,
        openCopyWindow: openIsBurnSuccessWindow,
    } = useCopy()

    return (
        <>
            {isMintSuccess && (
                <CopyWindow
                    text="Mint success"
                    onClose={closeIsMintSuccessWindow}
                />
            )}
            {isBurnSuccess && (
                <CopyWindow
                    text="Burn success"
                    onClose={closeIsBurnSuccessWindow}
                />
            )}
            {hasRole === undefined && (
                <Title>You do not have rights to manage CFNC token.</Title>
            )}
            {hasRole !== undefined && (
                <AutoColumn gap="lg">
                    <Title>CFNC token</Title>
                    <Section>
                        <InnerSection>
                            <AutoColumn gap="xl">
                                <StyledLink
                                    href="https://goerli.etherscan.io/address/0x5cCcFa5c977668B2C8Df4781CB7670c30FFF7054"
                                    target="_blank"
                                >
                                    Blockchain Ethereum (Token info)
                                </StyledLink>
                                <Flex>
                                    <BDLTInputSection
                                        value={issued}
                                        onChange={setIssued}
                                        label="Need to issue"
                                        title="Number of tokens issued"
                                        amount={Math.trunc(total)}
                                        buttonText="Issue tokens"
                                        onSave={setMint}
                                        notifySuccess={openIsMintSuccessWindow}
                                        updateValues={updateValues}
                                    />
                                    <BDLTInputSection
                                        value={burned}
                                        onChange={setBurned}
                                        label="Burn of tokens"
                                        title="Number of tokens burned"
                                        amount={burnedTokens}
                                        buttonText="Burn tokens"
                                        onSave={setBurn}
                                        notifySuccess={openIsBurnSuccessWindow}
                                        updateValues={updateValues}
                                    />
                                    <ToggleSection>
                                        <AutoColumn gap="xl">
                                            <TEXT.primary
                                                fontSize={12}
                                                fontWeight={600}
                                                lineHeight="20.4px"
                                            >
                                                Put contract on pause
                                            </TEXT.primary>
                                            <Toggle
                                                value={pause}
                                                onChange={toggleContract}
                                            />
                                        </AutoColumn>
                                    </ToggleSection>
                                </Flex>
                            </AutoColumn>
                        </InnerSection>
                    </Section>
                </AutoColumn>
            )}
        </>
    )
}

export default BDLTToken
