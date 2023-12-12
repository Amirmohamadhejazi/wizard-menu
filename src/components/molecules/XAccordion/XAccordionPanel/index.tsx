'use client'

import { Accordion, type AccordionPanelProps } from '@mantine/core'

const XAccordionPanel = ({ children, className = '', ...rest }: AccordionPanelProps) => {
    return (
        <Accordion.Panel className={`${className}`} {...rest}>
            {children}
        </Accordion.Panel>
    )
}

export { XAccordionPanel }
