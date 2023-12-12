'use client'

import { Menu, type MenuTargetProps } from '@mantine/core'

const XMenuTarget = ({ children, ...rest }: MenuTargetProps) => {
    return <Menu.Target {...rest}>{children}</Menu.Target>
}

export { XMenuTarget }
