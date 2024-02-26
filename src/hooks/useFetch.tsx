import { useState, useEffect } from "react";

interface Response<T> {
  data: T | null;
  isPending: boolean;
}

export const useFetch = <T,>(url: string): Response<T> => {
  const [data, setData] = useState<T | null>(null);

  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      // In practice I would normall add some error handling here
      const response = await fetch(url);
      const json = await response.json();

      setIsPending(false);
      setData(json);
    };

    fetchData();
  }, [url]);

  return { data, isPending } as Response<T>;
};
