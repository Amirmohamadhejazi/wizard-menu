'use client'

import { forwardRef } from 'react'
import { PasswordInput, type PasswordInputProps } from '@mantine/core'

const XPasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className = '', classNames, ...rest }, ref) => {
        return <PasswordInput className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
    }
)

XPasswordInput.displayName = 'XPasswordInput'

export { XPasswordInput }
