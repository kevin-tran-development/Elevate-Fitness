import AboutImg from "../../assets/imgs/elevate-fitness-workout-1.jpg";
import { PageButton } from "../buttons/PageButton";

export const AboutContent = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col max-lg:text-center max-lg:items-center">
          <h2 className="text-6xl font-bold mb-8 leading-[1.2]">
            A place like no other.
          </h2>
          <p className="text-[18px] font-medium mb-16">
            Elevate Fitness is more than a place where high performers come to
            be their best. If you have a body, you're an athlete. The desire and
            focus on making small, incremental gains each and every day is the
            mantra that we strive by.
          </p>
          <PageButton
            buttonBg="bg-[#343434]"
            shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
            shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
            textColorHover="group-hover/{button}:text-[#fff]"
            btnSrc="/contact"
          >
            Learn More
          </PageButton>
        </div>
        <div className="max-lg:hidden relative">
          <div className="absolute right-[-20px] bottom-[-20px] h-[200px] w-[250px] bg-[#D2042D]"></div>
          <img
            src={AboutImg}
            className="clip-path-imgRightSide"
            alt="Man training inside of a gym lifting a massive tire up for a workout"
          />
        </div>
      </div>
    </>
  );
};
