import ClassesImg1 from "../../assets/imgs/ef-classes-img-1.jpg";
import { PageButton } from "../buttons/PageButton";

export const ClassesIntro = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col max-lg:text-center max-lg:items-center justify-center">
          <h2 className="text-6xl font-bold mb-8 leading-[1.2]">
            Fitness Classes
          </h2>
          <p className="text-[18px] font-medium mb-16">
            As one of the very few fitness facilties that provide a large range
            of Fitness Classes, Elevate Fitness strives to provide you with not
            only a variety of selections but with quality focusing on the
            experience.
          </p>
          <PageButton
            buttonBg="bg-[#343434]"
            shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
            shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
            textColorHover="group-hover/{button}:text-[#fff]"
            btnSrc="/schedule"
          >
            Class Schedule
          </PageButton>
        </div>
        <div className="max-lg:hidden">
          <img
            src={ClassesImg1}
            className="clip-path-imgRightSide"
            alt="Man training inside of a gym lifting a massive tire up for a workout"
          />
        </div>
      </div>
    </>
  );
};
