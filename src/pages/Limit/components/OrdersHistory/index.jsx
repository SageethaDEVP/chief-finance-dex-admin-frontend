import React, { useEffect, useState } from 'react'
import Pagination from '../../../../components/Pagination'
import { AutoColumn } from '../../../../components/styled'
import { Bottom, InfoSection } from '../../../../components/StyledSection'
import { getBidlityContract } from '../../utils/lib.js'
import { PAGINATION_LIMIT_TWELVE } from '../../../../constants/pages'
import { InfoRow, TitleRow } from './pairs-rows'

const OrdersHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const update = async () => {
            const bidelity = getBidlityContract()
            const _orders = await bidelity.getOrders(
                (page - 1) * PAGINATION_LIMIT_TWELVE,
                PAGINATION_LIMIT_TWELVE
            )
            console.log({ _orders })
            const _data = []
            for (let i = 0; i < Number(_orders[1]); i++) {
                _data.push(_orders[0][i])
            }
            setData(_data)
            setLoading(false)
        }
        setLoading(true)
        update()
    }, [page])

    useEffect(() => {
        const update = async () => {
            const bidelity = getBidlityContract()
            const openOrders = await bidelity.getOrdersLength()
            const totalOrders = await bidelity.ordersNum()
            setTotalPages(
                Math.ceil(
                    (Number(totalOrders) - Number(openOrders)) /
                        PAGINATION_LIMIT_TWELVE
                )
            )
        }
        update()
    }, [])
    console.log({ data })
    return (
        <AutoColumn gap="xl">
            <InfoSection>
                <TitleRow />
                {!loading &&
                    data?.length !== 0 &&
                    data?.map((item, index) => (
                        <InfoRow key={index} data={item} index={index} />
                    ))}
            </InfoSection>
            <Bottom>
                <Pagination
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </Bottom>
        </AutoColumn>
    )
}

export default OrdersHistory
