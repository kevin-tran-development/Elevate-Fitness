export const FacilitySingleCard = (props) => {
  return (
    <>
      <div
        className={`relative overflow-hidden shadow-xl rounded-3xl border border-solid ${props.borderColor} hover:scale-105 group transition ease duration-[0.4s]`}
      >
        <div className={`min-h-[500px] w-full ${props.bgImage} bg-cover`}>
          <div className="absolute inset-0 bg-black/70 group-hover:opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-14">
            <p className="text-4xl md:text-5xl uppercase tracking-[0.3em] leading-[1.2]">
              {props.cardLabel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
