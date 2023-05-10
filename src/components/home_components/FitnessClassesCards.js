import { PageButton } from "../buttons/PageButton";

export const FitnessClassesCards = (props) => {
  return (
    <>
      <div className="border border-solid border-[#CFCFCF] group">
        <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-4 h-full">
          <div className="relative grayscale-0 group-hover:grayscale transition ease duration-[0.3s] lg:hidden">
            <img
              src={props.imgSrc}
              className="h-full w-full absolute object-cover"
              alt={props.imgAlt}
            />
          </div>
          <div className="flex flex-col px-12 py-10 lg:px-12 lg:py-20">
            <h3 className="text-5xl font-bold uppercase leading-[4rem] mb-8">
              {props.cardLabel}
            </h3>
            <p className="text-[18px] font-medium pb-32">{props.cardDesc}</p>
            <PageButton
              buttonBg="bg-[#343434]"
              shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
              shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
              textColorHover="group-hover/{button}:text-[#fff]"
              btnSrc="/schedule"
            >
              {props.btnLabel}
            </PageButton>
          </div>
          <div className="max-lg:hidden clip-path-imgRightSide relative grayscale-0 group-hover:grayscale transition ease duration-[0.4s]">
            <img
              src={props.imgSrc}
              className="h-full w-full absolute object-cover"
              alt={props.imgAlt}
            />
          </div>
        </div>
      </div>
    </>
  );
};
