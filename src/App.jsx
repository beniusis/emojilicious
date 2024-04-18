import Header from './components/Header';
import Search from './components/Search';
import Loading from './components/Loading';
import Emojis from './components/Emojis';
import useSearchEmoji from './hooks/useSearchEmoji';
import { useState } from 'react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const { loading, error, foundAny, emojis } = useSearchEmoji(searchValue);

  return (
    <div className="min-h-screen flex flex-col items-center font-titillium-web gap-10 py-10">
      <Header />
      <Search value={searchValue} setValue={setSearchValue} />
      {loading && <Loading />}
      {foundAny && !loading && !error && <Emojis emojis={emojis} />}
    </div>
  );
}
