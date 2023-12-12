'use client'

import { forwardRef } from 'react'
import { ActionIcon, type ActionIconProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton = forwardRef<HTMLButtonElement, ActionIconProps>(
    ({ children, className = '', classNames, ...rest }, ref) => {
        return (
            <ActionIcon className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
                {children}
            </ActionIcon>
        )
    }
)

CustomButton.displayName = 'CustomButton'

// Since the MantineActionIcon is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const XActionIcon = createPolymorphicComponent<'button', ActionIconProps>(CustomButton)

export { XActionIcon }
