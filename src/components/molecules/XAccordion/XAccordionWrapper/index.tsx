'use client'

import { Accordion, type AccordionProps } from '@mantine/core'

const XAccordionWrapper = ({ children, className = '', classNames, ...rest }: AccordionProps) => {
    return (
        <Accordion className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Accordion>
    )
}

export { XAccordionWrapper }
