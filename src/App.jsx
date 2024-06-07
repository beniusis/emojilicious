import { Emojis, Header, Loading, Search } from './components';
import { useState } from 'react';
import { useSearchEmoji } from './hooks';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const { loading, error, foundAny, emojis } = useSearchEmoji(searchValue);

  return (
    <div className="flex min-h-screen flex-col items-center gap-10 bg-yellow-50 py-10 duration-500">
      <Header />
      <Search value={searchValue} setValue={setSearchValue} />
      {loading && <Loading />}
      {foundAny && !loading && !error && <Emojis emojis={emojis} />}
    </div>
  );
}
