import { type BreadcrumbsProps } from '@mantine/core'

interface IXBreadcrumbProps extends Omit<BreadcrumbsProps, 'children'> {
    breadcrumbItems: { title: string; href: string }[]
}

export type { IXBreadcrumbProps }
