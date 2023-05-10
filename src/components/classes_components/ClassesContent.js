import { ClassesCards } from "./ClassesCards";
import StrengthClassImg from "../../assets/imgs/elevate-fitness-workout-2.jpg";
import CardioClassImg from "../../assets/imgs/elevate-fitness-workout-3.jpg";
import YogaClassImg from "../../assets/imgs/elevate-fitness-workout-4.jpg";
import CyclingClassImg from "../../assets/imgs/elevate-fitness-workout-5.jpg";
import BoxingClassImg from "../../assets/imgs/elevate-fitness-workout-6.jpg";
import MuayThaiClassImg from "../../assets/imgs/elevate-fitness-workout-7.jpg";

export const ClassesContent = () => {
  return (
    <>
      <div className="mt-24 md:mt-48">
        <div className="text-center">
          <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
            Change is inevitable, Growth is optional
          </p>
          <h2 className="text-black text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
            Class Categories
          </h2>
        </div>
      </div>
      <div className="mt-24 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-14">
        <ClassesCards
          imgSrc={StrengthClassImg}
          imgAlt="Man training inside of a gym lifting a massive tire up for a workout"
          cardLabel="Strength"
          cardDesc="Build lean muscle, increase bone density, and improve overall strength with our wide variety of strength training classes, including weightlifting, kettlebells, and bodyweight exercises."
          btnLabel="Explore Classes"
          btnSrc="/classes/strength"
        />
        <ClassesCards
          imgSrc={CardioClassImg}
          imgAlt="A woman partaking in an outdoor cardiovascular exercise activity at a gym location"
          cardLabel="Cardio"
          cardDesc="Improve your cardiovascular health and burn calories with our intense and energizing cardio classes, including HIIT, dance, and circuit training."
          btnLabel="Explore Classes"
          btnSrc="/classes/cardio"
        />
        <ClassesCards
          imgSrc={YogaClassImg}
          imgAlt="A woman in blue performing a forward bend pose in a yoga class"
          cardLabel="Mind & Body"
          cardDesc="Find your center and reduce stress with our mind and body classes, including yoga, Pilates, and meditation."
          btnLabel="Explore Classes"
          btnSrc="/classes/mind-body"
        />
        <ClassesCards
          imgSrc={CyclingClassImg}
          imgAlt="A man with headphones on locked in and super focused while giving it his all on the cycling machine"
          cardLabel="Cycling"
          cardDesc="Get your heart pumping and legs moving with our high-energy cycling classes, complete with motivating music and expert coaching."
          btnLabel="Explore Classes"
          btnSrc="/classes/cycling"
        />
        <ClassesCards
          imgSrc={BoxingClassImg}
          imgAlt="A woman with black boxing gloves equipped training on a bag at the gym"
          cardLabel="Boxing"
          cardDesc="Learn the fundamentals of boxing, improve your technique, and get a full-body workout with our boxing classes, suitable for all fitness levels."
          btnLabel="Explore Classes"
          btnSrc="/classes/boxing"
        />
        <ClassesCards
          imgSrc={MuayThaiClassImg}
          imgAlt="Two partners sparring and practicing muay thai inside of a ring"
          cardLabel="Muay Thai"
          cardDesc="Master the art of Muay Thai, a martial art that focuses on strikes using the fists, elbows, knees, and shins, and experience a full-body workout that will leave you feeling empowered and strong."
          btnLabel="Explore Classes"
          btnSrc="/classes/muay-thai"
        />
      </div>
    </>
  );
};
