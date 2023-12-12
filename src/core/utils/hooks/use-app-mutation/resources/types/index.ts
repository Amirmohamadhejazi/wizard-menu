import { type UseMutationOptions } from '@tanstack/react-query'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

// Using interface instead of type keyword because of Extends & Omit feature
interface TUseAppMutationOptionsType<TData, TError, TVariables, TContext>
    extends Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'onError'> {
    onError?:
        | ((error: TCriticalAnyType, variables: TCriticalAnyType, context: TCriticalAnyType) => TCriticalAnyType)
        | undefined
}

export default TUseAppMutationOptionsType
