export const PageHero = (props) => {
  return (
    <>
      <div className={`bg-cover ${props.bgImage} bg-[50%] h-[60vh] relative`}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative h-full flex justify-center items-center">
          <h1 className="text-7xl md:text-8xl text-white tracking-widest uppercase font-bold">
            {props.pageHeader}
          </h1>
        </div>
      </div>
    </>
  );
};
