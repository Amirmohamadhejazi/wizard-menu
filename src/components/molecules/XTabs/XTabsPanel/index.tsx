'use client'

import { Tabs, type TabsPanelProps } from '@mantine/core'

const XTabsPanel = ({ children, className = '', ...rest }: TabsPanelProps) => {
    return (
        <Tabs.Panel className={`${className}`} {...rest}>
            {children}
        </Tabs.Panel>
    )
}

export { XTabsPanel }
