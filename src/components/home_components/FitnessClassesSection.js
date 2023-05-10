import { FitnessClassesCards } from "./FitnessClassesCards";
import StrengthClassImg from "../../assets/imgs/elevate-fitness-workout-2.jpg";
import CardioClassImg from "../../assets/imgs/elevate-fitness-workout-3.jpg";
import YogaClassImg from "../../assets/imgs/elevate-fitness-workout-4.jpg";
import CyclingClassImg from "../../assets/imgs/elevate-fitness-workout-5.jpg";
import BoxingClassImg from "../../assets/imgs/elevate-fitness-workout-6.jpg";
import MuayThaiClassImg from "../../assets/imgs/elevate-fitness-workout-7.jpg";

export const FitnessClassesSection = () => {
  return (
    <>
      <section className="bg-white px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Our Fitness Classes
            </p>
            <h2 className="text-6xl font-bold uppercase tracking-wider pt-16 flex flex-wrap justify-center leading-[1.2]">
              <span className="text-stroke-2 text-fill-transparent">
                Flexible Classes
              </span>
              <span className="lg:pl-5">Tailored For Success</span>
            </h2>
            <p className="text-[18px] pt-8 font-bold">
              With over 100+ classes to choose from, there's a class for
              everyone at Elevate Fitness.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 mt-24 lg:mt-48">
            <FitnessClassesCards
              imgSrc={StrengthClassImg}
              imgAlt="A man training by performing a chest flye on the cable machine"
              cardLabel="Strength"
              cardDesc="Be stronger, feel stronger, build confidence."
              btnLabel="Class Schedule"
            />
            <FitnessClassesCards
              imgSrc={CardioClassImg}
              imgAlt="A woman partaking in an outdoor cardiovascular exercise activity at a gym location"
              cardLabel="Cardio"
              cardDesc="Nothing shines brighter than a healthy heart."
              btnLabel="Class Schedule"
            />
            <FitnessClassesCards
              imgSrc={YogaClassImg}
              imgAlt="A woman in blue performing a forward bend pose in a yoga class"
              cardLabel="Mind & Body"
              cardDesc="Crafted to blend physical practice and mindfulness to achieve your perfect centre."
              btnLabel="Class Schedule"
            />
            <FitnessClassesCards
              imgSrc={CyclingClassImg}
              imgAlt="A man with headphones on locked in and super focused while giving it his all on the cycling machine"
              cardLabel="Cycling"
              cardDesc="Improve your endurance with low impact and high intensity."
              btnLabel="Class Schedule"
            />
            <FitnessClassesCards
              imgSrc={BoxingClassImg}
              imgAlt="A woman with black boxing gloves equipped training on a bag at the gym"
              cardLabel="Boxing"
              cardDesc="A full mind and body experience with high cardio and plyometric-style exercises."
              btnLabel="Class Schedule"
            />
            <FitnessClassesCards
              imgSrc={MuayThaiClassImg}
              imgAlt="Two partners sparring and practicing muay thai inside of a ring"
              cardLabel="Muay Thai"
              cardDesc="Become one with your body and mind through Muay Thai training."
              btnLabel="Class Schedule"
            />
          </div>
        </div>
      </section>
    </>
  );
};
