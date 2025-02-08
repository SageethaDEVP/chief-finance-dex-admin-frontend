import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { RowBetween, StyledSpan } from '../../../../components/styled'
import { getCurrency } from '../../utils/lib.js'
import Token from '../../../../components/Token'

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

const InfoText = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.textPrimary};
    font-weight: 500;
    line-height: 20.4px;
    flex: 1 1;
    text-align: center;
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
                <StyledSpan>Order Id</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Type</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Amount to</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Amount from</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Limit price</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Created</StyledSpan>
            </TitleText>
        </StyledTitle>
    )
}

export const InfoRow = ({ data, index }) => {
    const {
        assetIn,
        assetOut,
        assetInOffered,
        assetOutExpected,
        id,
        price,
        inDecimals,
        outDecimals,
        created,
    } = data
    const [tokenA, setTokenA] = useState()
    const [tokenB, setTokenB] = useState()
    useEffect(() => {
        const update = async () => {
            const _tokenA = await getCurrency(assetIn)
            const _tokenB = await getCurrency(assetOut)
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
                <CenteredSpan>{Number(id) + 1}</CenteredSpan>
            </InfoText>
            <InfoText>
                <StyledSpan>{assetIn < assetOut ? 'Buy' : 'Sell'}</StyledSpan>
            </InfoText>
            <InfoText>
                <Token token={tokenA} />
                <StyledSpan>
                    {Number(
                        ethers.utils.formatUnits(assetInOffered, inDecimals)
                    ).toPrecision(8)}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <Token token={tokenB} />
                <StyledSpan>
                    {Number(
                        ethers.utils.formatUnits(assetOutExpected, outDecimals)
                    ).toPrecision(8)}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <StyledSpan>
                    {Number(ethers.utils.formatUnits(price, 18)).toPrecision(6)}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <StyledSpan>
                    {new Date(Number(created) * 1000)
                        .toISOString()
                        .replace('T', ' ')
                        .substring(0, 19)}
                </StyledSpan>
            </InfoText>
        </StyledInfo>
    )
}
