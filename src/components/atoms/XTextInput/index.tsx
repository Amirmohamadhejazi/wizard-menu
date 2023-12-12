'use client'

import { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'

const XTextInput = forwardRef<HTMLInputElement, TextInputProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <TextInput
            className={`w-full relative ${className}`}
            classNames={{ ...classNames }}
            autoComplete='off'
            {...rest}
            ref={ref}
        />
    )
})

XTextInput.displayName = 'XTextInput'

export { XTextInput }
