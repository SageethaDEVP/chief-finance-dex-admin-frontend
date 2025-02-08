import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Flex } from '../../../components/styled'
import { ROUTES } from '../../../router/constants/routes'
import { Tab } from '../../../components/Tab'

const Tabs = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Flex>
            <Tab
                onClick={() => navigate(ROUTES.limit)}
                active={String(location.pathname === ROUTES.limit)}
            >
                General
            </Tab>
            <Tab
                onClick={() => navigate(ROUTES.openorders)}
                active={String(location.pathname === ROUTES.openorders)}
            >
                Open Order
            </Tab>
            <Tab
                onClick={() => navigate(ROUTES.ordershistory)}
                active={String(location.pathname === ROUTES.ordershistory)}
            >
                Order History
            </Tab>
        </Flex>
    )
}

export default Tabs
