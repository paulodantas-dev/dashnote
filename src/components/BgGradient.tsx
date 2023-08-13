export const BgGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 h-5 -z-10">
      <div className="absolute w-48 h-48 bg-gray-500 blur-3xl" />
      <div className="absolute w-48 h-48 bg-slate-500 blur-3xl left-[40%]" />
      <div className="absolute w-48 h-48 bg-neutral-500 blur-3xl right-0" />
    </div>
  );
};
