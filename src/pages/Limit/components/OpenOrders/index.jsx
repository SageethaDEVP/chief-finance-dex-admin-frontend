import React, { useEffect, useState } from 'react'
import Pagination from '../../../../components/Pagination'
import { AutoColumn } from '../../../../components/styled'
import { Bottom, InfoSection } from '../../../../components/StyledSection'
import { getBidlityContract } from '../../utils/lib.js'
import { PAGINATION_LIMIT_TWELVE } from '../../../../constants/pages'
import { InfoRow, TitleRow } from './pairs-rows'

const OpenOrders = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const update = async () => {
            const bidelity = getBidlityContract()
            console.log({ bidelity })
            const _openorders = await bidelity.getOpenOrders(
                (page - 1) * PAGINATION_LIMIT_TWELVE,
                PAGINATION_LIMIT_TWELVE
            )
            console.log(_openorders)
            const _data = []
            for (let i = 0; i < Number(_openorders[1]); i++) {
                _data.push(_openorders[0][i])
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
            const totalOrders = await bidelity.getOrdersLength()
            setTotalPages(
                Math.ceil(Number(totalOrders) / PAGINATION_LIMIT_TWELVE)
            )
        }
        update()
    }, [])

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

export default OpenOrders
