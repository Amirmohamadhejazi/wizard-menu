'use client'

import { Tabs, type TabsListProps } from '@mantine/core'

const XTabsList = ({ children, className = '', ...rest }: TabsListProps) => {
    return (
        <Tabs.List className={`${className}`} {...rest}>
            {children}
        </Tabs.List>
    )
}

export { XTabsList }
