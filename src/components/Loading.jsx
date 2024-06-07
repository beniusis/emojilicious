export const Loading = () => {
  return (
    <div className="mt-8 flex flex-row gap-2">
      <div className="size-4 animate-bounce rounded-full bg-emoji-yellow"></div>
      <div className="size-4 animate-bounce rounded-full bg-emoji-yellow [animation-delay:-.3s]"></div>
      <div className="size-4 animate-bounce rounded-full bg-emoji-yellow [animation-delay:-.5s]"></div>
    </div>
  );
};
