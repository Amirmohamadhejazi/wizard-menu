'use client'

import { Popover, type PopoverDropdownProps } from '@mantine/core'

const XPopoverDropdown = ({ children, className = '', ...rest }: PopoverDropdownProps) => {
    return (
        <Popover.Dropdown className={`${className}`} {...rest}>
            {children}
        </Popover.Dropdown>
    )
}

export { XPopoverDropdown }
