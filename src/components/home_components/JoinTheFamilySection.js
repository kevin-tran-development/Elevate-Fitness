import { PageButton } from "../buttons/PageButton";

export const JoinTheFamilySection = () => {
  return (
    <>
      <section className="bg-jtf-banner bg-cover bg-[50%] px-12 py-[10rem] relative">
        <div className="absolute inset-0 bg-black/95"></div>
        <div className="container lg:max-w-screen-xl">
          <div className="relative">
            <h2 className="text-white font-bold text-6xl uppercase tracking-wider leading-[1.2] pb-10">
              Join the Elevate Fitness family
            </h2>
            <p className="text-[18px] text-white mb-20">
              Elevate your health, elevate your body, elevate your mind, elevate
              your experience, elevate all aspects in your life. Elevate
              Fitness.
            </p>
            <PageButton
              buttonBg="bg-[#D2042D]"
              shadowInset="shadow-[inset_0_0_0_0_#fff]"
              shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#fff]"
              textColorHover="group-hover/{button}:text-[#D2042D]"
              btnSrc="/membership"
            >
              Join the family
            </PageButton>
          </div>
        </div>
      </section>
    </>
  );
};
