import { useState, useEffect } from 'react';

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

interface ApiResponse<T> {
  data: T | [];
  loading: boolean;
  error: Error | null;
}

export function useFetch<T = Post[]>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) {
      setError(new Error('URL must be provided!'));
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result: T = await response.json();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
          return;
        }

        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('Something went wrong!'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
