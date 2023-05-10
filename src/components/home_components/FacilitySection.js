import { FacilityCard } from "./FacilityCard";

export const FacilitySection = () => {
  return (
    <>
      <section className="bg-texture-rock-dark-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Our state-of-the-art facility
            </p>
            <h2 className="text-white text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
              Elevate Fitness Gym
            </h2>
            <p className="text-[18px] pt-8 font-bold text-white">
              We've built upon our standards and princples by providing you
              with...
            </p>
          </div>
          <div className="mt-24 lg:mt-48">
            <FacilityCard borderColor="border-[#d2042d]" />
          </div>
        </div>
      </section>
    </>
  );
};
