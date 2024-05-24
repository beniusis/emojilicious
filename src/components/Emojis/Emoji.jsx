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
    <div className="flex h-[64px] w-[64px] select-none items-center justify-center rounded-lg text-3xl shadow-lg duration-100 ease-out hover:scale-110 hover:bg-gray-100 bg-white dark:hover:bg-yellow-200 group">
      <button
        className="duration-100 ease-out max-h-fit max-w-fit hover:cursor-pointer active:scale-90 disabled:hover:cursor-default disabled:active:scale-100"
        title="Press to copy to clipboard"
        onClick={copyToClipboard}
        disabled={actionText === COPIED_TEXT}
      >
        {value}
      </button>

      <div className="bg-white shadow-xl dark:shadow-none p-2 rounded-md group-hover:block hidden absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 text-xs text-center w-32 after:content-[''] after:absolute after:-bottom-[6px] after:left-1/2 after:w-4 after:h-4 after:bg-white after:-translate-x-1/2 polygon">
        {actionText}
      </div>
    </div>
  );
};

Emoji.propTypes = {
  value: PropTypes.string.isRequired
};
