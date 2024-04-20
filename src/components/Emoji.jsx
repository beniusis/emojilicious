export default function Emoji({ value }) {
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="flex justify-center items-center shadow-lg w-[64px] h-[64px] text-3xl select-none">
      <div
        className="duration-100 ease-out max-w-fit max-h-fit hover:cursor-pointer active:scale-90"
        title="Press to copy to clipboard"
        onClick={copyToClipboard}
      >
        {value}
      </div>
    </div>
  );
}
