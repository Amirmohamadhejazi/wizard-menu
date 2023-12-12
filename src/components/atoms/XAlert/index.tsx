'use client'

import { forwardRef } from 'react'
import { Alert, type AlertProps } from '@mantine/core'

const XAlert = forwardRef<HTMLInputElement, AlertProps>(({ children, className = '', classNames, ...rest }, ref) => {
    return (
        <Alert className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
            {children}
        </Alert>
    )
})

XAlert.displayName = 'XAlert'

export { XAlert }
