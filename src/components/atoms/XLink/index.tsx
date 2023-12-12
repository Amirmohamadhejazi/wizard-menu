import { forwardRef } from 'react'
import Link from 'next/link'

import { type IXLinkProps } from './resources'

const XLink = forwardRef<HTMLAnchorElement, IXLinkProps>(
    ({ children, prefetch = false, className = '', ...rest }, ref) => {
        return (
            <Link prefetch={prefetch} className={`${className}`} {...rest} ref={ref}>
                {children}
            </Link>
        )
    }
)

XLink.displayName = 'XLink'

export { XLink }
