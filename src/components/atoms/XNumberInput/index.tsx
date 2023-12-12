'use client'

import { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'

const XNumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ className = '', classNames, ...rest }, ref) => {
    return <NumberInput className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

XNumberInput.displayName = 'XNumberInput'

export { XNumberInput }
