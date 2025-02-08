import { useCallback } from 'react'
import { bdltyService } from '../api/service/bdltyService'

export function useBdltyService() {
    const setMint = useCallback(async (data) => {
        try {
            await bdltyService.mint(data)
            return true
        } catch (err) {
            console.error(err)
        }
    }, [])

    const setBurn = useCallback(async (data) => {
        try {
            await bdltyService.burn(data)
            return true
        } catch (err) {
            console.error(err)
        }
    }, [])

    const getBurned = useCallback(async () => {
        try {
            return await bdltyService.getBurn()
        } catch (err) {
            console.error(err)
        }
    }, [])

    const pauseContract = useCallback(async () => {
        try {
            await bdltyService.pause()
            return true
        } catch (err) {
            console.error(err)
        }
    }, [])

    const unpauseContract = useCallback(async () => {
        try {
            await bdltyService.unpause()
            return true
        } catch (err) {
            console.error(err)
        }
    }, [])

    return { setMint, setBurn, pauseContract, unpauseContract, getBurned }
}
