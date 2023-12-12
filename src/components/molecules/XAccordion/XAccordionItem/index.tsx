'use client'

import { Accordion, type AccordionItemProps } from '@mantine/core'

const XAccordionItem = ({ children, className = '', ...rest }: AccordionItemProps) => {
    return (
        <Accordion.Item className={`${className}`} {...rest}>
            {children}
        </Accordion.Item>
    )
}

export { XAccordionItem }
