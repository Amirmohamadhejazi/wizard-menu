'use client'

import { forwardRef } from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'

const XCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className = '', classNames, ...rest }, ref) => {
    return (
        <Checkbox
            className={`${className}`}
            classNames={{
                body: `items-center cursor-pointer`,
                label: `text-sm font-medium pt-0.5 select-none cursor-pointer`,
                input: `cursor-pointer`,
                ...classNames,
            }}
            {...rest}
            ref={ref}
        />
    )
})

XCheckbox.displayName = 'XCheckbox'

export { XCheckbox }
