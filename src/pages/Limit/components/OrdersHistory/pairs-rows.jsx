import React, { useEffect, useState } from 'react'
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

const CenteredSpan = styled(StyledSpan)`
    text-align: center;
`

const RedButton = styled.div`
    color: white;
    background: red;
    text-color: white;
    border-radius: 10px;
    width: 80px;
    margin: auto;
`
const GreenButton = styled.div`
    color: white;
    background: green;
    text-color: white;
    border-radius: 10px;
    width: 60px;
    margin: auto;
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
                <StyledSpan>Commission</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Created</StyledSpan>
            </TitleText>
            <TitleText>
                <StyledSpan>Updated</StyledSpan>
            </TitleText>
            <RightText
                style={{
                    minWidth: '90px',
                }}
            >
                Status
            </RightText>
        </StyledTitle>
    )
}

export const InfoRow = ({ data, index }) => {
    const {
        orderState,
        assetIn,
        assetOut,
        assetInOffered,
        assetOutExpected,
        stake,
        id,
        price,
        inDecimals,
        outDecimals,
        created,
        updated,
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
                <StyledSpan>
                    <Token token={tokenB} />
                    {Number(
                        ethers.utils.formatUnits(assetOutExpected, outDecimals)
                    ).toPrecision(8)}
                </StyledSpan>
            </InfoText>
            <InfoText>
                <StyledSpan>
                    <Token token={tokenA} />
                    {Number(
                        ethers.utils.formatUnits(assetInOffered, inDecimals)
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
                    {Number(
                        ethers.utils.formatUnits(stake, inDecimals)
                    ).toPrecision(5)}
                    {tokenA?.symbol}
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
            <InfoText>
                <StyledSpan>
                    {new Date(Number(updated) * 1000)
                        .toISOString()
                        .replace('T', ' ')
                        .substring(0, 19)}
                </StyledSpan>
            </InfoText>
            <InfoText
                style={{
                    color: orderState == 1 ? 'red' : 'green',
                    minWidth: '90px',
                }}
            >
                {orderState == 1 && <RedButton>Cancelled</RedButton>}
                {orderState == 2 && <GreenButton>Filled</GreenButton>}
            </InfoText>
        </StyledInfo>
    )
}
