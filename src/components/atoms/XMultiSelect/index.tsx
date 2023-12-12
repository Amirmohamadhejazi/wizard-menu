'use client'

import { forwardRef } from 'react'
import { MultiSelect, type MultiSelectProps } from '@mantine/core'

const XMultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <MultiSelect
            className={`${className}`}
            classNames={{ ...classNames }}
            nothingFoundMessage='Nothing Found . . .'
            maxDropdownHeight={200}
            {...rest}
            ref={ref}
        />
    )
})

XMultiSelect.displayName = 'XMultiSelect'

export default XMultiSelect
