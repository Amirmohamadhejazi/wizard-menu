'use client'

import { forwardRef } from 'react'
import { TagsInput, type TagsInputProps } from '@mantine/core'

const XTagsInput = forwardRef<HTMLInputElement, TagsInputProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <TagsInput
            className={`${className}`}
            classNames={{ ...classNames }}
            maxDropdownHeight={200}
            {...rest}
            ref={ref}
        />
    )
})

XTagsInput.displayName = 'XTagsInput'

export { XTagsInput }
