import PropTypes from 'prop-types';

export const Emoji = ({ value }) => {
  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.textContent);
  };

  return (
    <div className="flex h-[64px] w-[64px] select-none items-center justify-center rounded-lg text-3xl shadow-lg duration-100 ease-out hover:scale-110 hover:bg-gray-100 bg-white dark:hover:bg-yellow-200">
      <div
        className="duration-100 ease-out max-h-fit max-w-fit hover:cursor-copy active:scale-90"
        title="Press to copy to clipboard"
        onClick={copyToClipboard}
      >
        {value}
      </div>
    </div>
  );
};

Emoji.propTypes = {
  value: PropTypes.string.isRequired
};
