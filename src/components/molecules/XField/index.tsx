'use client'

import { type FieldValues } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import { type IXFieldProps } from './resources'

const XField = <T extends FieldValues>({
    children,
    fieldName,
    fieldError,
    containerClassName = '',
}: IXFieldProps<T>) => {
    return (
        <div className={`w-full flex flex-col ${containerClassName}`}>
            {children}
            {fieldError && (
                <div className='min-h-[24px] flex items-center justify-start'>
                    <ErrorMessage
                        name={fieldName}
                        errors={fieldError}
                        render={({ message }) => (
                            <p className='block text-red-600 text-xs font-semibold text-danger-500 py-1'>{message}</p>
                        )}
                    />
                </div>
            )}
        </div>
    )
}

export { XField }
