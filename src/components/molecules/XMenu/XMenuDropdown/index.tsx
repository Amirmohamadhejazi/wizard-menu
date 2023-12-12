'use client'

import { Menu, type MenuDropdownProps } from '@mantine/core'

const XMenuDropdown = ({ children, className = '', ...rest }: MenuDropdownProps) => {
    return (
        <Menu.Dropdown className={`${className}`} {...rest}>
            {children}
        </Menu.Dropdown>
    )
}

export { XMenuDropdown }
