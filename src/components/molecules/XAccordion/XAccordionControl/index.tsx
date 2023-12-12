'use client'

import { Accordion, type AccordionControlProps } from '@mantine/core'

const XAccordionControl = ({ children, className = '', ...rest }: AccordionControlProps) => {
    return (
        <Accordion.Control className={`${className}`} {...rest}>
            {children}
        </Accordion.Control>
    )
}

export { XAccordionControl }
