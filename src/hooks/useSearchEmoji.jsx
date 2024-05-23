import { useEffect, useState } from 'react';
import axios from 'axios';

export const useSearchEmoji = (value) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foundAny, setFoundAny] = useState(false);
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setFoundAny(false);

    const controller = new AbortController();

    axios({
      method: 'GET',
      url: 'https://beniusis.vercel.app/api/emojis',
      params: { search: value },
      signal: controller.signal
    })
      .then((response) => {
        setEmojis(response.data.emojis);
        setFoundAny(response.data.length > 0);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });

    return () => controller.abort();
  }, [value, setLoading, setError, setFoundAny, setEmojis]);

  return { loading, error, foundAny, emojis };
};
