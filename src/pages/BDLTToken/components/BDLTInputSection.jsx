import React, { useState } from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../../../components/styled'
import { Button } from '../../../components/Button'
import { Input, Label } from '../../../components/Input'
import { TextPrimary } from '../../../components/Text'
import Loader, { LoaderContainer } from '../../../components/Loader'

const StyledButton = styled(Button)`
    padding: 8px;
    line-height: 25.6px;
    font-size: 16px;

    :disabled {
        cursor: auto;
        :hover {
            opacity: 1;
        }
    }
`

const Container = styled.div`
    width: 100%;
    max-width: 250px;
    margin-left: 24px;

    :first-child {
        margin-left: 0;
    }
`
const InputNumber = styled(Input)`
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Primary = styled(TextPrimary)`
    font-size: 20px;
    font-weight: 700;
    line-height: 34px;
`
const PrimarySmall = styled(TextPrimary)`
    font-size: 12px;
    font-weight: 600;
    line-height: 20.4px;
`

const INITIAL_INPUT_VALUE = 0

const BDLTInputSection = ({
    title,
    value,
    onChange,
    label,
    amount,
    buttonText,
    onSave,
    notifySuccess,
    updateValues,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const handleSave = async () => {
        const requestData = {
            value: String(value),
        }
        setIsLoading(true)
        await onSave(requestData)
        setIsLoading(false)
        notifySuccess()
        onChange(INITIAL_INPUT_VALUE)
        updateValues()
    }

    const buttonDiabled = isLoading || value === '' || String(value) === '0'

    return (
        <Container>
            <AutoColumn gap="xl">
                <PrimarySmall>{title}</PrimarySmall>
                <Primary>{amount}</Primary>
                <AutoColumn gap="4px">
                    <Label>{label}</Label>
                    <InputNumber
                        disabled={isLoading}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type="number"
                        placeholder=""
                    />
                </AutoColumn>
                <StyledButton onClick={handleSave} disabled={buttonDiabled}>
                    {isLoading && (
                        <LoaderContainer>
                            <Loader />
                        </LoaderContainer>
                    )}
                    {buttonText}
                </StyledButton>
            </AutoColumn>
        </Container>
    )
}

export default BDLTInputSection
