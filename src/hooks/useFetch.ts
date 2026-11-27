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
  newError: Error | null;
}

export function useFetch<T = Post[]>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Derive validation error synchronously during render (no cascading render)
  const validationError = !url ? new Error('URL must be provided!') : null;
  const newError = validationError ?? error;

  useEffect(() => {
    if (!url) {
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error && error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
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
    newError,
  };
}
