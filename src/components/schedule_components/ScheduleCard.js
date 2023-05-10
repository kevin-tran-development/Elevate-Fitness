import { Link } from "react-router-dom";
import { PageButton } from "../buttons/PageButton";

export const ScheduleCard = (props) => {
  return (
    <>
      {props.scheduledClass.map((classdata) => (
        <div
          className="bg-[#fff] w-full px-14 py-10 rounded-2xl shadow-xl"
          key={classdata.id}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex md:items-center max-sm:justify-center order-1">
              <Link
                to="/contact"
                className={`relative w-[70px] h-[70px] ${classdata.bgSrc} bg-cover bg-[50%] rounded-2xl`}
              />
            </div>
            <div className="flex flex-col justify-center max-sm:pt-8 max-sm:text-center order-2 sm:order-3 xl:order-2">
              <p className="text-[18px] font-bold tracking-wide mb-4">
                {classdata.time}
              </p>
              <p className="text-[18px] font-bold tracking-wide uppercase">
                {classdata.title}
              </p>
            </div>
            <div className="flex flex-col justify-center max-xl:items-end max-xl:mb-10 max-sm:items-center max-sm:mt-8 max-sm:pt-8 max-sm:border-t-2 max-sm:border-[#D3D3D3] order-3 sm:order-2 xl:order-3">
              <p className="text-2xl font-bold text-[#343434] mb-4">Trainer</p>
              <p className="text-[18px] font-bold">{classdata.trainer}</p>
            </div>
            <div className="justify-center flex flex-col items-end max-sm:mx-auto order-4">
              <PageButton
                buttonBg="bg-[#343434]"
                shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                textColorHover="group-hover/{button}:text-[#fff]"
                btnSrc="/contact"
              >
                Book Class
              </PageButton>
              <p className="text-[14px] pt-2 uppercase font-bold text-[#D2042D] max-sm:mx-auto">
                {classdata.spots} Spots Remaining
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
