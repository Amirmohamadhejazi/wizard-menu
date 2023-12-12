'use client'

import { forwardRef } from 'react'
import { Radio, type RadioProps } from '@mantine/core'

const XRadio = forwardRef<HTMLInputElement, RadioProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <Radio
            className={`${className}`}
            classNames={{
                body: 'flex-row items-center gap-1 cursor-pointer',
                label: 'text-xs sm:text-sm font-semibold text-dark p-0 cursor-pointer',
                inner: 'mt-0.5',
                radio: 'w-4 h-4 cursor-pointer',
                ...classNames,
            }}
            {...rest}
            ref={ref}
        />
    )
})

XRadio.displayName = 'XRadio'

export { XRadio }
