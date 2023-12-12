'use client'

import { Popover, type PopoverProps } from '@mantine/core'

const XPopoverWrapper = ({ children, classNames, ...rest }: PopoverProps) => {
    return (
        <Popover classNames={{ ...classNames }} {...rest}>
            {children}
        </Popover>
    )
}

export { XPopoverWrapper }
