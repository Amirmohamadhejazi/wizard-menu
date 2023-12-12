'use client'

import { Pagination } from '@mantine/core'
import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

import { type IXPaginationProps } from './resources'

const XPagination = ({
    pageCapacity,
    totalDataCount,
    className = '',
    classNames,
    queryParamName = 'currentPage',
    ...rest
}: IXPaginationProps) => {
    const [query, setQuery] = useQueryParam(queryParamName, withDefault(NumberParam, 1))

    return (
        <Pagination
            className={`${className}`}
            classNames={{ ...classNames }}
            value={query}
            total={Math.ceil(totalDataCount / pageCapacity)}
            onChange={(page) => setQuery(page)}
            siblings={1}
            boundaries={1}
            {...rest}
        />
    )
}

export { XPagination }
