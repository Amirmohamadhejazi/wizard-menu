'use client'

import { Menu, type MenuDividerProps } from '@mantine/core'

const XMenuDivider = ({ children, className = '', ...rest }: MenuDividerProps) => {
    return (
        <Menu.Divider className={`${className}`} {...rest}>
            {children}
        </Menu.Divider>
    )
}

export { XMenuDivider }
