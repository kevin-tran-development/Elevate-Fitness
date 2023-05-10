import { TransparentButton } from "../buttons/TransparentButton";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-hero-banner bg-cover bg-[50%] lg:h-[110vh] h-[100vh]">
        <div className="flex lg:justify-end h-full container mx-auto xl:w-[95%]">
          <div className="w-[80%] md:w-[100%] lg:w-[50%] flex-col justify-center flex text-white max-lg:mx-auto">
            <div className="lg:border-l-4 lg:border-[#d2042d] lg:pl-10 lg:text-left text-center">
              <p className="text-6xl lg:text-5xl xl:text-7xl md:text-7xl uppercase mb-[2rem] tracking-widest">
                Rise to the occasion
              </p>
              <h1 className="text-8xl lg:text-7xl xl:text-9xl md:text-9xl uppercase tracking-wider text-stroke-2 text-fill-transparent">
                Elevate your fitness
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="w-[80%] text-center leading-10 lg:leading-10 xl:leading-10 text-2xl xl:text-3xl lg:text-2xl md:text-3xl md:w[100%] lg:text-left mt-[4rem] tracking-wider mb-14 font-lora">
                Conquer your goals... Change is inevitable, Growth is optional.
              </p>
              <TransparentButton btnSrc="/membership">
                Get Started
              </TransparentButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
