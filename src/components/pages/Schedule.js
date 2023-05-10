import { PageHero } from "../page_hero_components/PageHero";
import allScheduledClasses from "../schedule_components/schedule_data/ScheduleData";
import { useEffect, useState } from "react";
import { ScheduleCard } from "../schedule_components/ScheduleCard";

export const Schedule = () => {
  const [scheduledClasses, setScheduledClasses] = useState(allScheduledClasses);
  const [currentClass, setCurrentClass] = useState("All");
  const [day, setDay] = useState(false);

  const handleClick = (e) => {
    let chosenIntensity = e.target.value;
    setCurrentClass(chosenIntensity);
    setDay(chosenIntensity);
  };

  useEffect(() => {
    if (currentClass === "All") {
      setScheduledClasses(allScheduledClasses);
    } else {
      const filtered = allScheduledClasses.filter((classdata) => {
        return (
          classdata.day === currentClass || classdata.day.includes(currentClass)
        );
      });
      setScheduledClasses(filtered);
    }
  }, [currentClass]);

  return (
    <>
      <PageHero bgImage="bg-schedule-banner" pageHeader="Schedule"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Check out the latest classes updated daily
            </p>
            <h2 className="text-black text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
              Class Schedule
            </h2>
          </div>
          <div className="mt-24 md:mt-48">
            <p className="text-2xl font-semibold text-center">
              Filter through your choice of classes by each day of the week
            </p>
            <div className="flex max-md:items-center md:flex-row flex-col justify-center mt-10">
              <div className="grid grid-cols-1 max-md:w-full md:grid-cols-4 gap-10">
                <button
                  onClick={handleClick}
                  type="button"
                  value="All"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[50px] py-6 ${
                    day === "All" ? "ef-active" : ""
                  }`}
                >
                  All
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Monday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Monday" ? "ef-active" : ""
                  }`}
                >
                  Monday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Tuesday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Tuesday" ? "ef-active" : ""
                  }`}
                >
                  Tuesday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Wednesday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Wednesday" ? "ef-active" : ""
                  }`}
                >
                  Wednesday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Thursday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Thursday" ? "ef-active" : ""
                  }`}
                >
                  Thursday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Friday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Friday" ? "ef-active" : ""
                  }`}
                >
                  Friday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Saturday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Saturday" ? "ef-active" : ""
                  }`}
                >
                  Saturday
                </button>
                <button
                  onClick={handleClick}
                  type="button"
                  value="Sunday"
                  className={`text-2xl rounded-3xl text-[#fff] font-medium bg-[#343434] hover:bg-[#D2042D] transition ease duration-[0.3s] px-[30px] py-6 ${
                    day === "Sunday" ? "ef-active" : ""
                  }`}
                >
                  Sunday
                </button>
              </div>
            </div>
            <div className="mt-24">
              <div className="grid grid-cols-1 gap-6">
                <ScheduleCard scheduledClass={scheduledClasses} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
