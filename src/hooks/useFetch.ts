import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions<B> {
  method?: RequestMethod;
  body?: B;
  headers?: Record<string, string>;
  axiosConfig?: AxiosRequestConfig;
}

const apiUrl: string = process.env.NODE_ENV === 'development' ? 'http://localhost:5001' : 'https://igor-edison-personal.ru/api';

const fetchApi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function sendRequest<T, B = any>(
  url: string,
  options: RequestOptions<B> = {}
): Promise<T> {
  const { method = 'GET', body, headers, axiosConfig } = options;

  const config: AxiosRequestConfig = {
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: body,
    ...axiosConfig,
  };

  try {
    const res: AxiosResponse<T> = await fetchApi(config);
    return res.data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error;
  }
}
