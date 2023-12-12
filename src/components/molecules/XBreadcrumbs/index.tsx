'use client'

import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '@mantine/core'

import { XLink } from '@atoms/XLink'

import { type IXBreadcrumbProps } from './resources'

const XBreadcrumbs = ({ breadcrumbItems, className = '', classNames, ...rest }: IXBreadcrumbProps) => {
    const pathname = usePathname()

    // Rendering breadcrumb items within the JSX structure
    const renderBreadcrumbItems = () =>
        breadcrumbItems.map((item, index) => (
            <XLink
                key={index}
                href={item.href}
                className={`${pathname === item.href ? 'text-gray-800' : 'text-gray-500'}`}
            >
                {item.title}
            </XLink>
        ))

    return (
        <Breadcrumbs
            className={`${className}`}
            classNames={{ ...classNames, breadcrumb: 'text-sm font-medium' }}
            {...rest}
        >
            {renderBreadcrumbItems()}
        </Breadcrumbs>
    )
}

export { XBreadcrumbs }
