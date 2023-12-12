'use client'

import { forwardRef } from 'react'
import { Radio, type RadioGroupProps } from '@mantine/core'

const XRadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ children, className = '', classNames, ...rest }, ref) => {
        return (
            <Radio.Group className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
                {children}
            </Radio.Group>
        )
    }
)

XRadioGroup.displayName = 'XRadioGroup'

export { XRadioGroup }
