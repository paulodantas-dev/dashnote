export const Avatar = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <img
        className="rounded-full w-12 h-12 object-cover"
        src="https://picsum.photos/200/300"
        alt="person image"
      />

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-lg">Denis Steven</span>
        <span className="font-extralight text-sm">devissteven@gmail.com</span>
      </div>
    </div>
  );
};
