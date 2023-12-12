'use client'

import { forwardRef } from 'react'
import { Select, type SelectProps } from '@mantine/core'

const XSelect = forwardRef<HTMLInputElement, SelectProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <Select
            className={`w-full relative ${className}`}
            classNames={{ ...classNames }}
            nothingFoundMessage='Nothing Found . . .'
            maxDropdownHeight={200}
            {...rest}
            ref={ref}
        />
    )
})

XSelect.displayName = 'XSelect'

export { XSelect }
