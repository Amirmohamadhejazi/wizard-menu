'use client'

import { forwardRef } from 'react'
import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className = '', classNames, ...rest }, ref) => {
        return (
            <Button className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
                {children}
            </Button>
        )
    }
)

CustomButton.displayName = 'CustomButton'

// Since the MantineButton is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const XButton = createPolymorphicComponent<'button', ButtonProps>(CustomButton)

export { XButton }
