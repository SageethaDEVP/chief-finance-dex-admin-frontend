import React, { useEffect, useState } from 'react'
import Pagination from '../../../../components/Pagination'
import { AutoColumn } from '../../../../components/styled'
import { Bottom, InfoSection } from '../../../../components/StyledSection'
import { PAGINATION_LIMIT_TWELVE } from '../../../../constants/pages'
import { usePagination } from '../../../../hooks/usePagination'
import { getBidlityContract } from '../../utils/lib.js'
import { InfoRow, TitleRow } from './pairs-rows'

const Inshight = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const update = async () => {
            const bidelity = getBidlityContract()
            console.log({ bidelity })
            const _insight = await bidelity.getInsight(0, 1000)
            const _data = []
            for (let i = 0; i < Number(_insight[1]); i++) {
                _data.push(_insight[0][i])
            }
            setData(_data)
            setLoading(false)
        }
        setLoading(true)
        update()
    }, [])

    const { renderList, totalPages, page, changePage } = usePagination(
        data,
        loading,
        PAGINATION_LIMIT_TWELVE
    )

    return (
        <AutoColumn gap="xl">
            <InfoSection>
                <TitleRow />
                {!loading &&
                    renderList?.length !== 0 &&
                    renderList?.map((item, index) => (
                        <InfoRow key={index} data={item} index={index} />
                    ))}
            </InfoSection>
            <Bottom>
                <Pagination
                    page={page}
                    setPage={changePage}
                    totalPages={totalPages}
                />
            </Bottom>
        </AutoColumn>
    )
}

export default Inshight
