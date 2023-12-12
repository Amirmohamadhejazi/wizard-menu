import { type ReactNode } from 'react'
import { type FieldErrors, type FieldName, type FieldValues } from 'react-hook-form'
import { type FieldValuesFromFieldErrors } from '@hookform/error-message'

interface IXFieldProps<T extends FieldValues> {
    children: ReactNode
    fieldName: FieldName<FieldValuesFromFieldErrors<FieldErrors<T>>>
    fieldError: FieldErrors<T> | null
    containerClassName?: string
}

export type { IXFieldProps }
