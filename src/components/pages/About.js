import { PageHero } from "../page_hero_components/PageHero";
import { AboutContent } from "../home_components/AboutContent";
import { FacilityCard } from "../home_components/FacilityCard";

export const About = () => {
  return (
    <>
      <PageHero bgImage="bg-about-banner" pageHeader="About Us"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <AboutContent />
          <div className="text-center mt-[15rem] md:mt-[18rem]">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Our state-of-the-art facility
            </p>
            <h2 className="text-black text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
              Elevate Fitness Gym
            </h2>
            <p className="text-[18px] pt-8 font-bold text-black">
              We've built upon our standards and princples by providing you
              with...
            </p>
          </div>
          <div className="mt-24 lg:mt-48">
            <FacilityCard borderColor="border-[#343434]" />
          </div>
        </div>
      </section>
    </>
  );
};
