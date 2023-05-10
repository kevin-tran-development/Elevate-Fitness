import { Cards } from "./Cards";
import { AboutContent } from "./AboutContent";
import { SponsoredLogos } from "./SponsoredLogos";

export const AboutSection = () => {
  return (
    <>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem] flex flex-col">
        <div className="container lg:max-w-screen-xl">
          <Cards />
          <div className="mt-24 md:mt-48">
            <AboutContent />
          </div>
          <div className="mt-24 md:mt-48 pt-24 border-t border-solid border-[#CFCFCF]">
            <SponsoredLogos />
          </div>
        </div>
      </section>
    </>
  );
};
