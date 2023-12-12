'use client'

import { Tabs, type TabsTabProps } from '@mantine/core'

const XTabsTab = ({ children, className = '', ...rest }: TabsTabProps) => {
    return (
        <Tabs.Tab className={`${className}`} {...rest}>
            {children}
        </Tabs.Tab>
    )
}

export { XTabsTab }
