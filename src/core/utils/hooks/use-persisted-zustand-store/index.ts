'use client'

import { useEffect, useState } from 'react'

const usePersistedZustandStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F
) => {
    const result = store(callback) as F
    const [data, setData] = useState<F>()

    useEffect(() => {
        setData(result)
    }, [result])

    return data
}

export { usePersistedZustandStore }
