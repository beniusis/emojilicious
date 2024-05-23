import { Switch } from './Switch';

export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-8">
      <Switch />
      <h2 className="text-5xl font-extrabold tracking-tight text-yellow-400 duration-500 ease-in-out select-none sm:text-7xl">
        emojilicious
      </h2>
    </header>
  );
};
