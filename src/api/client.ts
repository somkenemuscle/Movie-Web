export class ApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

type QueryParams = Record<string, string | number | undefined>

interface GetOptions {
  params?: QueryParams
  signal?: AbortSignal
}

function buildUrl(baseUrl: string, params?: QueryParams): string {
  const url = new URL(baseUrl)
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }
  return url.toString()
}

async function get<T>(baseUrl: string, options: GetOptions = {}): Promise<T> {
  const url = buildUrl(baseUrl, options.params)

  let response: Response
  try {
    response = await fetch(url, { signal: options.signal })
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw error
    }
    throw new ApiError('Network error — please check your connection and try again.')
  }

  if (!response.ok) {
    if (response.status === 401) {
      throw new ApiError('Invalid or missing API key.', response.status)
    }
    if (response.status === 429) {
      throw new ApiError('Too many requests — please slow down and try again shortly.', response.status)
    }
    throw new ApiError(`Request failed with status ${response.status}.`, response.status)
  }

  try {
    return (await response.json()) as T
  } catch {
    throw new ApiError('Received an invalid response from the server.')
  }
}

export const httpClient = { get }
