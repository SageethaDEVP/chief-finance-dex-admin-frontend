import { gql } from 'graphql-tag'

export const BDLTY_INFO_QUERY = gql`
    query getBDLTYInfo($id: Bytes!) {
        bdltyTokens(id: $id) {
            id
            burned
        }
    }
`
