import WorkoutImg from "../../assets/imgs/ef-workout-1.png";
import VectorShape1 from "../../assets/imgs/ef-vec-shapes-1.png";
import VectorShape2 from "../../assets/imgs/ef-vec-shapes-2.png";
import VectorShape3 from "../../assets/imgs/ef-vec-shapes-3.png";
import VectorShape4 from "../../assets/imgs/ef-vec-shapes-4.png";
import PersonalTrainingImg from "../../assets/imgs/elevate-fitness-workout-8.jpg";
import { PageButton } from "../buttons/PageButton";

export const PersonalTrainingSection = () => {
  return (
    <>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 pt-[10rem] pb-[10rem] xl:pb-[18rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Our Training Programs
            </p>
            <h2 className="text-6xl font-bold uppercase tracking-wider pt-16 flex flex-wrap justify-center leading-[1.2]">
              <span className="text-stroke-2 text-fill-transparent">
                Continuous Progress
              </span>
              <span className="lg:pl-5">Not delayed perfection</span>
            </h2>
            <p className="text-[18px] pt-8 font-bold">
              Crush milestone goals with the help of our certified expert
              instructors.
            </p>
          </div>
          <div className="mt-24 lg:mt-48">
            {/* Desktop View */}
            <div className="max-1xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src={WorkoutImg}
                  className="absolute top-[5%] left-[-1%] z-[5]"
                  alt="A well built lean man performing a high knee exercise"
                />
                <img
                  src={VectorShape1}
                  className="absolute top-[7%] left-[12%]"
                  alt="A red half circle vector"
                />
                <img
                  src={VectorShape2}
                  className="absolute top-[13%] left-[17.1%]"
                  alt="A grey half circle vector"
                />
                <img
                  src={VectorShape3}
                  className="absolute top-[21%] left-[23.2%]"
                  alt="A white half circle vector"
                />
              </div>
              <div className="w-full h-[500px] px-14 py-12 text-white bg-[#343434] flex flex-col justify-center text-left relative">
                <h3 className="text-8xl font-bold mb-8 leading-[1.1]">
                  Dedicated training plan designed for you.
                </h3>
                <p className="text-[18px] font-medium mt-14 mb-14">
                  Whether it's personal, team or performance training, your
                  experience directly correlates with a fully detailed plan
                  carefully curated that is unique to each client.
                </p>
                <PageButton
                  buttonBg="bg-[#D2042D]"
                  shadowInset="shadow-[inset_0_0_0_0_#fff]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#fff]"
                  textColorHover="group-hover/{button}:text-[#D2042D]"
                  btnSrc="/training"
                >
                  Learn More
                </PageButton>
                <img
                  src={VectorShape4}
                  className="absolute w-[30%] bottom-[-18%] right-[-5%]"
                  alt="A line of red bars stacked next to each other at a slanted angle"
                />
              </div>
            </div>
            {/* Mobile*/}
            <div className="1xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="relative">
                <div className="max-lg:hidden absolute left-[-20px] bottom-[-20px] h-[200px] w-[250px] bg-[#D2042D]"></div>
                <img
                  src={PersonalTrainingImg}
                  className="lg:clip-path-imgLeftSide rounded-3xl"
                  alt="A personal trainer coaching her client on the battle ropes"
                />
              </div>
              <div className="flex flex-col max-lg:text-center max-lg:items-center">
                <h3 className="text-5xl font-bold mb-8 leading-[1.1]">
                  Dedicated training plan designed for you.
                </h3>
                <p className="text-[18px] font-medium mb-16">
                  Whether it's personal, team or performance training, your
                  experience directly correlates with a fully detailed plan
                  carefully curated that is unique to each client.
                </p>
                <PageButton
                  buttonBg="bg-[#343434]"
                  shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                  textColorHover="group-hover/{button}:text-[#fff]"
                  btnSrc="/training"
                >
                  Learn More
                </PageButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
