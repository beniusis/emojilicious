import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSearchEmoji(value) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [foundAny, setFoundAny] = useState(false);
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setFoundAny(false);

    if (value === '') {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    axios({
      method: 'GET',
      url: 'https://emoji-api.com/emojis',
      params: { search: value, access_key: import.meta.env.VITE_EMOJI_API_KEY },
      signal: controller.signal
    })
      .then((response) => {
        setEmojis(response.data);
        setFoundAny(response.data.length > 0);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    return () => controller.abort();
  }, [value]);

  return { loading, error, foundAny, emojis };
}