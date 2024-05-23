import { Emoji } from './Emoji';
import { find } from 'node-emoji';
import PropTypes from 'prop-types';

export const Emojis = ({ emojis }) => {
  return (
    <div className="flex min-w-[280px] flex-row flex-wrap items-center justify-center gap-10 px-10 py-5">
      {emojis.map((emoji) => {
        if (emoji.codePoint.length <= 5 && find(emoji.character)) {
          return <Emoji key={emoji.codePoint} value={emoji.character} />;
        }
      })}
    </div>
  );
};

Emojis.propTypes = {
  emojis: PropTypes.array.isRequired
};
