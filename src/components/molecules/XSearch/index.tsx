'use client'

import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { NumberParam, StringParam, useQueryParams } from 'use-query-params'
import { IconSearch } from '@tabler/icons-react'

import { XTextInput } from '@atoms/XTextInput'

import { type IXSearchProps } from './resources'

const XSearch = ({ ...rest }: IXSearchProps) => {
    const [query, setQuery] = useQueryParams({
        search: StringParam,
        currentPage: NumberParam,
    })
    const [searchValue, setSearchValue] = useState(query.search || '')

    const debounced = useDebouncedCallback((searchValue: string) => {
        if (searchValue.length > 0) {
            setQuery({ search: searchValue, currentPage: 1 })
        } else {
            setQuery({ search: null, currentPage: 1 })
        }
    }, 1000)

    return (
        <XTextInput
            className='w-full'
            leftSection={<IconSearch size={'1.25rem'} />}
            placeholder='Search'
            value={searchValue}
            onChange={(e) => {
                // Set it into a state for showing the value to the user
                setSearchValue(e.currentTarget.value)
                debounced(e.currentTarget.value)
            }}
            {...rest}
        />
    )
}

export { XSearch }
