'use client'

import { forwardRef } from 'react'
import { Switch, type SwitchProps } from '@mantine/core'

const XSwitch = forwardRef<HTMLInputElement, SwitchProps>(({ className = '', classNames, ...rest }, ref) => {
    return <Switch className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

XSwitch.displayName = 'XSwitch'

export { XSwitch }
