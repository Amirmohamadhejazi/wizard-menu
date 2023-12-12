'use client'

import { forwardRef } from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'

const XTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = '', classNames, ...rest }, ref) => {
    return <Textarea className={`w-full relative ${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

XTextarea.displayName = 'XTextarea'

export default XTextarea
