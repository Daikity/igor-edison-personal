type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions<B> {
  method?: RequestMethod;
  body?: B;
  headers?: Record<string, string>;
}

/** Относительные запросы к API того же origin (Next Route Handlers) */
export async function sendRequest<T, B = unknown>(
  url: string,
  options: RequestOptions<B> = {}
): Promise<T> {
  const { method = 'GET', body, headers } = options;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T;

  if (!response.ok) {
    const error = new Error('API request failed') as Error & {
      response?: { status: number; data: T };
    };
    error.response = { status: response.status, data };
    throw error;
  }

  return data;
}
