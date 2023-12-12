'use client'

import { forwardRef } from 'react'
import { PinInput, type PinInputProps } from '@mantine/core'

const XPinInput = forwardRef<HTMLInputElement, PinInputProps>(({ className = '', classNames, ...rest }, ref) => {
    return <PinInput className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

XPinInput.displayName = 'XPinInput'

export { XPinInput }
