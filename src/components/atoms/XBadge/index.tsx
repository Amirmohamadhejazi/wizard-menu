'use client'

import { Badge, type BadgeProps } from '@mantine/core'

const XBadge = ({ children, className = '', classNames, ...rest }: BadgeProps) => {
    return (
        <Badge className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Badge>
    )
}

export { XBadge }
