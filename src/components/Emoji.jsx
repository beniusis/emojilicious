export default function Emoji({ value, title }) {
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="flex justify-center items-center shadow-lg w-[64px] h-[64px] text-3xl select-none">
      <div
        className="max-w-fit max-h-fit hover:cursor-pointer active:scale-90 ease-out duration-100"
        title={title}
        onClick={copyToClipboard}
      >
        {value}
      </div>
    </div>
  );
}
