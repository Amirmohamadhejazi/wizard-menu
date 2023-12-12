'use client'

import { Popover, type PopoverTargetProps } from '@mantine/core'

const XPopoverTarget = ({ children, ...rest }: PopoverTargetProps) => {
    return <Popover.Target {...rest}>{children}</Popover.Target>
}

export { XPopoverTarget }
