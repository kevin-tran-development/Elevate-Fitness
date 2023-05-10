import { PageHero } from "../page_hero_components/PageHero";
import { useEffect, useState } from "react";
import allClasses from "../classes_components/classes_data/CardioData";
import { PageButton } from "../buttons/PageButton";
import "../classes_components/classes.css";

export const Cardio = () => {
  const [classesCard, setClassesCard] = useState(allClasses);
  const [currentClass, setCurrentClass] = useState("All");
  const [intensity, setIntensity] = useState(false);

  const handleClick = (e) => {
    let chosenIntensity = e.target.value;
    setCurrentClass(chosenIntensity);
    setIntensity(chosenIntensity);
  };

  useEffect(() => {
    if (currentClass === "All") {
      setClassesCard(allClasses);
    } else {
      const filtered = allClasses.filter((classes) => {
        return (
          classes.category === currentClass ||
          classes.category.includes(currentClass)
        );
      });
      setClassesCard(filtered);
    }
  }, [currentClass]);

  return (
    <>
      <PageHero bgImage="bg-cardio-banner" pageHeader="Cardio"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Elevate Fitness
            </p>
            <h2 className="text-black text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
              Explore Classes
            </h2>
          </div>
          <div className="mt-24 md:mt-48">
            <p className="text-2xl font-semibold text-center">
              Filter through your choice of classes by intensity levels
            </p>
            <div className="flex max-md:items-center md:flex-row flex-col justify-center mt-10">
              <div className="grid grid-cols-1 max-md:w-full md:grid-cols-4 gap-10">
                <button
                  onClick={handleClick}
                  type="button"
                  value="All"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[40px] py-6 ${
                    intensity === "All" ? "ef-active" : ""
                  }`}
                >
                  All
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Low"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[40px] py-6 ${
                    intensity === "Low" ? "ef-active" : ""
                  }`}
                >
                  Low
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Medium"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    intensity === "Medium" ? "ef-active" : ""
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="High"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[40px] py-6 ${
                    intensity === "High" ? "ef-active" : ""
                  }`}
                >
                  High
                </button>
              </div>
            </div>
            <div className="mt-24 md:mt-48">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-14 h-full">
                {classesCard.map((classes) => (
                  <div
                    className="border border-solid border-[#CFCFCF] px-14 py-14"
                    key={classes.id}
                  >
                    <p className="text-2xl font-bold text-[#D2042D] uppercase mb-10">
                      {classes.category} Intensity
                    </p>
                    <h3 className="text-5xl font-bold leading-[4rem] mb-4">
                      {classes.title}
                    </h3>
                    <p className="text-[18px] mb-14">{classes.description}</p>

                    <PageButton
                      buttonBg="bg-[#343434]"
                      shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                      shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                      textColorHover="group-hover/{button}:text-[#fff]"
                      btnSrc="/schedule"
                    >
                      View Schedule
                    </PageButton>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
