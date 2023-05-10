import { PageButton } from "../buttons/PageButton";

export const ClassesCards = (props) => {
  return (
    <>
      <div className="border border-solid border-[#CFCFCF] group">
        <div className="grid grid-cols-1 grid-rows-2 h-full">
          <div className="relative grayscale-0 group-hover:grayscale transition ease duration-[0.3s]">
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
              btnSrc={props.btnSrc}
            >
              {props.btnLabel}
            </PageButton>
          </div>
        </div>
      </div>
    </>
  );
};
