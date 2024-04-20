import Emoji from './Emoji';

export default function Emojis({ emojis }) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 p-5">
      {emojis.map((emoji) => {
        if (emoji.codePoint.length <= 5)
          return <Emoji key={emoji.codePoint} value={emoji.character} />;
      })}
    </div>
  );
}
