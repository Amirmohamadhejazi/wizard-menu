'use client'

import { Menu, type MenuProps } from '@mantine/core'

const XMenuWrapper = ({ children, classNames, ...rest }: MenuProps) => {
    return (
        <Menu classNames={{ ...classNames }} {...rest}>
            {children}
        </Menu>
    )
}

export { XMenuWrapper }
