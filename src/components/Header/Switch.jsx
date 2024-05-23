import { useTheme } from '@/hooks';

export const Switch = () => {
  const { currentTheme, setCurrentTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={currentTheme === 'dark'}
        onChange={() => {
          if (currentTheme === 'dark') {
            setCurrentTheme('light');
          } else {
            setCurrentTheme('dark');
          }
        }}
      />
      <div className="group peer h-12 w-24  rounded-full bg-yellow-400 shadow-md outline-none ring-0 duration-300  after:absolute after:left-1  after:top-1  after:flex after:h-10 after:w-10 after:-rotate-180 after:items-center after:justify-center after:rounded-full after:bg-gray-50 after:outline-none after:duration-300 after:content-['☀️'] peer-checked:bg-zinc-700 peer-checked:after:translate-x-12 peer-checked:after:rotate-0 peer-checked:after:content-['🌑'] peer-hover:after:scale-95 peer-focus:outline-none"></div>
    </label>
  );
};
