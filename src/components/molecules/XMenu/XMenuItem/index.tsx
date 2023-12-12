'use client'

import { Menu, type MenuItemProps } from '@mantine/core'

const XMenuItem = ({ children, className = '', ...rest }: MenuItemProps) => {
    return (
        <Menu.Item className={`${className}`} {...rest}>
            {children}
        </Menu.Item>
    )
}

export { XMenuItem }
