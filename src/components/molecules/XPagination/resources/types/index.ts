import { type PaginationProps } from '@mantine/core'

// Removing some props because we are handling it inside the main pagination component
interface IXPaginationProps
    extends Omit<PaginationProps, 'total' | 'getItemProps' | 'onPreviousPage' | 'onNextPage' | 'value' | 'onChange'> {
    pageCapacity: number
    totalDataCount: number
    queryParamName?: string
}

export type { IXPaginationProps }
