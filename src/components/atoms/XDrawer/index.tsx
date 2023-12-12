'use client'

import { Drawer, type DrawerProps } from '@mantine/core'

const XDrawer = ({ children, className = '', classNames, ...rest }: DrawerProps) => {
    return (
        <Drawer className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Drawer>
    )
}

export { XDrawer }
