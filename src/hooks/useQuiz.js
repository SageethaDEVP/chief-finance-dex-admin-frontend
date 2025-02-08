import { useCallback } from 'react'
import { quizService } from '../api/service/quizService'

export function useQuiz() {
    const setQuestion = useCallback(async (data) => {
        try {
            await quizService.question(data)
            return true
        } catch (error) {
            console.log(error)
        }
    }, [])
    const setLevel = useCallback(async (data) => {
        try {
            const level = await quizService.level(data)
            return { ...level, success: true }
        } catch (error) {
            console.log(error)
        }
    })
    const getQuestion = useCallback(async () => {
        try {
            return await quizService.getQuestion()
        } catch (error) {
            console.log(error)
        }
    })
    const getLevel = useCallback(async () => {
        try {
            return await quizService.getLevel()
        } catch (error) {
            console.log(error)
        }
    })
    return { setQuestion, setLevel, getQuestion, getLevel }
}
