'use client'

import { useMutation } from '@tanstack/react-query'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type TUseAppMutationOptionsType } from './resources'

const useAppMutation = <
    TData = TCriticalAnyType,
    TError = TCriticalAnyType,
    TVariables = TCriticalAnyType,
    TContext = unknown,
>({
    ...options
}: TUseAppMutationOptionsType<TData, TError, TVariables, TContext>) => {
    const { ...mutation } = useMutation(options)
    return mutation
}

export { useAppMutation }
