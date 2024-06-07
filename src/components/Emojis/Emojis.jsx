import { Emoji } from './Emoji';
import { find } from 'node-emoji';
import PropTypes from 'prop-types';

export const Emojis = ({ emojis }) => {
  return (
    <main className="flex min-w-[280px] flex-wrap items-center justify-center gap-12 px-8 py-4">
      {emojis.map((emoji) => {
        if (emoji.codePoint.length <= 5 && find(emoji.character)) {
          return <Emoji key={emoji.codePoint} value={emoji.character} />;
        }
      })}
    </main>
  );
};

Emojis.propTypes = {
  emojis: PropTypes.array.isRequired
};
