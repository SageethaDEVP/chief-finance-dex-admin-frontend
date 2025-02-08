import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { RowBetween, StyledSpan } from '../../../../components/styled'
import DoubleToken from '../../../../components/DoubleToken'
import { getCurrency } from '../../utils/lib.js'

const StyledTitle = styled(RowBetween)`
    padding: 6px 0;
`

const StyledInfo = styled(StyledTitle)`
    border-top: 1px solid ${({ theme }) => theme.border1};
    padding: 16px 0;
`

const TitleText = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 600;
    line-height: 20.4px;
    text-align: center;
    flex: 1 1;
`

const RightText = styled(TitleText)`
    max-width: 150px;
`

const InfoText = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 500;
    line-height: 20.4px;
    flex: 1 1;
    text-align: center;
`

const RightInfoText = styled(InfoText)`
    max-width: 150px;
`

const CenteredSpan = styled(StyledSpan)`
    text-align: center;
`

export const TitleRow = () => {
    return (
        <StyledTitle>
            <TitleText>
                <StyledSpan>Num</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Pair</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>User orders</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Total number of orders</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Total comission</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Platform profit</StyledSpan>
            </TitleText>
            <RightText>Lock Status</RightText>
        </StyledTitle>
    )
}

export const InfoRow = ({ data, index }) => {
    const {
        addressA,
        addressB,
        locked,
        totalOrders,
        totalTraders,
        commissionA,
        commissionB,
        decimalsA,
        decimalsB,
    } = data
    const [tokenA, setTokenA] = useState()
    const [tokenB, setTokenB] = useState()
    useEffect(() => {
        const update = async () => {
            const _tokenA = await getCurrency(addressA)
            const _tokenB = await getCurrency(addressB)
            setTokenA(_tokenA)
            setTokenB(_tokenB)
        }
        update()
    }, [])
    return (
        <StyledInfo>
            <InfoText>
                <CenteredSpan>{index + 1}</CenteredSpan>
            </InfoText>
            <InfoText>
                <DoubleToken w="100px" token0={tokenA} token1={tokenB} />
            </InfoText>
            <InfoText>
                <CenteredSpan>{Number(totalTraders)}</CenteredSpan>
            </InfoText>
            <InfoText>
                <StyledSpan style={{ width: '100px' }}>
                    {Number(totalOrders)}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <StyledSpan style={{ width: '110px' }}>
                    {Number(
                        ethers.utils.formatUnits(commissionA, decimalsA)
                    ).toPrecision(8)}
                    {tokenA?.symbol}
                    <br />
                    {Number(
                        ethers.utils.formatUnits(commissionB, decimalsB)
                    ).toPrecision(8)}
                    {tokenB?.symbol}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <StyledSpan style={{ width: '110px' }}>
                    {Number(
                        ethers.utils.formatUnits(commissionA, decimalsA)
                    ).toPrecision(8)}
                    {tokenA?.symbol}
                    <br />
                    {Number(
                        ethers.utils.formatUnits(commissionB, decimalsB)
                    ).toPrecision(8)}
                    {tokenB?.symbol}
                </StyledSpan>
            </InfoText>
            <RightInfoText>{locked ? 'Locked' : 'Works'}</RightInfoText>
        </StyledInfo>
    )
}
