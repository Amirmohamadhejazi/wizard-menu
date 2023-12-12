'use client'

import { Modal, type ModalProps } from '@mantine/core'

const XModal = ({ children, className = '', classNames, ...rest }: ModalProps) => {
    return (
        <Modal
            className={`${className}`}
            classNames={{
                ...classNames,
                content: `rounded-xl p-4 pt-0 ${classNames?.content || ''}`,
                body: `p-0 pt-4 ${classNames?.body || ''}`,
                header: 'p-0 pb-2 border-b',
                title: 'text-lg font-medium pt-4',
            }}
            {...rest}
        >
            {children}
        </Modal>
    )
}

export default XModal
