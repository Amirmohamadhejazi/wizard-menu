import { type TCriticalAnyType } from '@core/types/common/critical-any'

const serializeQueryParams = (params: { [key: string]: TCriticalAnyType }) => {
    const query = Object.entries(params)
        .filter(([, value]) => value)
        .map(([key, value]) => {
            if (Array.isArray(value)) {
                return value.map((v) => `${key}=${v}`).join('&')
            }
            return `${key}=${value}`
        })
        .join('&')

    return query ? `?${query}` : ''
}

export { serializeQueryParams }
