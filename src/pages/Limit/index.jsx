import React from 'react'
import { Outlet } from 'react-router-dom'
import { AutoColumn } from '../../components/styled'

import Title from '../../components/Title'
import Tabs from './components/Tabs'

const Limit = () => {
    //  const { user } = useUserStore(({ user }) => ({ user }), shallow)
    const hasRole = true

    return (
        <>
            {hasRole === undefined && (
                <Title>You do not have rights to manage Exchange/Swap.</Title>
            )}
            {hasRole !== undefined && (
                <AutoColumn gap="lg">
                    <Title>Exchange/Limit</Title>
                    <div>
                        <Tabs />
                        <Outlet />
                    </div>
                </AutoColumn>
            )}
        </>
    )
}

export default Limit
