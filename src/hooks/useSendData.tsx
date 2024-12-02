import { useState } from 'react';

interface SendDataHookResult<T> {
  isLoading: boolean;
  error: Error | null;
  sendData: (data: T) => Promise<void>;
}

export function useSendData<T>(url: string): SendDataHookResult<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendData = async (data: T) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendData };
}