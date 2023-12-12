'use client'

import { Menu, type MenuLabelProps } from '@mantine/core'

const XMenuLabel = ({ children, className = '', ...rest }: MenuLabelProps) => {
    return (
        <Menu.Label className={`${className}`} {...rest}>
            {children}
        </Menu.Label>
    )
}

export { XMenuLabel }
