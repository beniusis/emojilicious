import PropTypes from 'prop-types';
import { useState } from 'react';

const INITIAL_COPY_TEXT = '📋 Copy to clipboard';
const COPIED_TEXT = '✔️ Copied!';

export const Emoji = ({ value }) => {
  const [actionText, setActionText] = useState(INITIAL_COPY_TEXT);

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.textContent);

    setActionText(COPIED_TEXT);
    setTimeout(() => {
      setActionText(INITIAL_COPY_TEXT);
    }, 2000);
  };

  return (
    <div className="group relative flex size-10 items-center justify-center">
      <button
        className="max-h-fit max-w-fit text-4xl duration-100 ease-out hover:scale-105 hover:cursor-pointer active:scale-95 disabled:scale-100 disabled:hover:cursor-default"
        title="Press to copy to clipboard"
        onClick={copyToClipboard}
        disabled={actionText === COPIED_TEXT}
      >
        {value}
      </button>

      <div className="polygon absolute -top-3 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-full text-nowrap rounded-md bg-emoji-yellow p-2 text-center text-xs after:absolute after:bottom-[-6px] after:left-1/2 after:size-4 after:-translate-x-1/2 after:bg-emoji-yellow after:content-[''] group-hover:block">
        {actionText}
      </div>
    </div>
  );
};

Emoji.propTypes = {
  value: PropTypes.string.isRequired
};
