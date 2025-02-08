import React, { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'
import styled from 'styled-components'
import { useUserStore } from '../../store/userStore'
import { MANAGE_QUIZ } from '../../constants/roles'
import Title from '../../components/Title'
import { AutoColumn } from '../../components/styled'
import { InfoSection } from '../../components/StyledSection'
import { useQuiz } from '../../hooks/useQuiz'
import { useCopy } from '../../hooks/useCopy'
import CopyWindow from '../../components/CopyWindow'
import InputSection from './components/InputSection'

const Section = styled(InfoSection)`
    display: flex;
    border-radius: 10px;
    padding: 16px 16px 20px;
    border: 1px solid ${({ theme }) => theme.border3};
`
const InnerSection = styled(Section)`
    padding: 24px;
`

export default function Quiz() {
    const [questionsPerLevel, setQuestionsPerLevel] = useState(0)
    const [totalLevel, setTotalLevel] = useState(0)
    const [isLevelLoading, setIsLevelLoading] = useState(false)
    const [isQuestionLoading, setIsQuestionLoading] = useState(false)
    const { getLevel, getQuestion, setQuestion, setLevel } = useQuiz()
    const [infoMessage, setInfoMessage] = useState('')

    const {
        isCopied: isQuestionsUpdated,
        closeCopyWindow: closeQuestionWindow,
        openCopyWindow: openQuestionWindow,
    } = useCopy()
    const {
        isCopied: isLevelsUpdated,
        closeCopyWindow: closeLevelWindow,
        openCopyWindow: openLevelWindow,
    } = useCopy()

    const { user } = useUserStore(({ user }) => ({ user }), shallow)
    const hasRole = user.roles.find((role) => role.name === MANAGE_QUIZ)

    const onQuestionSave = async () => {
        setIsQuestionLoading(true)
        const response = await setQuestion({ value: questionsPerLevel })
        setIsQuestionLoading(false)
        if (response === true) {
            openQuestionWindow()
            updateSync()
        }
    }
    const onLevelSave = async () => {
        setIsLevelLoading(true)
        const response = await setLevel({ value: totalLevel })
        console.log(response.message)
        setIsLevelLoading(false)
        if (response.success === true) {
            setInfoMessage(response.message)
            openLevelWindow()
            updateSync()
        }
    }
    const updateSync = () => {
        getLevel().then((data) => setTotalLevel(data))
        getQuestion().then((data) => setQuestionsPerLevel(data))
    }
    useEffect(() => {
        updateSync()
    }, [])
    return (
        <>
            {hasRole === undefined && (
                <Title>You do not have rights to manage Quiz.</Title>
            )}
            {isQuestionsUpdated && (
                <CopyWindow
                    text="Questions Per Level Updated"
                    onClose={closeQuestionWindow}
                />
            )}
            {isLevelsUpdated && (
                <CopyWindow text={infoMessage} onClose={closeLevelWindow} />
            )}
            {hasRole !== undefined && (
                <AutoColumn gap="lg">
                    <Title>Quiz</Title>
                    <Section>
                        <InnerSection>
                            <InputSection
                                title="Quesions Per Level"
                                value={questionsPerLevel}
                                onChange={setQuestionsPerLevel}
                                onSave={onQuestionSave}
                                isLoading={isQuestionLoading}
                            />
                            <InputSection
                                title="Total Numbers of Levels"
                                value={totalLevel}
                                onChange={setTotalLevel}
                                onSave={onLevelSave}
                                isLoading={isLevelLoading}
                            />
                        </InnerSection>
                    </Section>
                </AutoColumn>
            )}
        </>
    )
}
