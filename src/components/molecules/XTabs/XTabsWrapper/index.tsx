'use client'

import { Tabs, type TabsProps } from '@mantine/core'

const XTabsWrapper = ({ children, className = '', classNames, ...rest }: TabsProps) => {
    return (
        <Tabs className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Tabs>
    )
}

export { XTabsWrapper }
