'use client'

import { forwardRef } from 'react'
import { Autocomplete, type AutocompleteProps } from '@mantine/core'

const XAutoComplete = forwardRef<HTMLInputElement, AutocompleteProps>(
    ({ className = '', classNames, ...rest }, ref) => {
        return <Autocomplete className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
    }
)

XAutoComplete.displayName = 'XAutoComplete'

export { XAutoComplete }
