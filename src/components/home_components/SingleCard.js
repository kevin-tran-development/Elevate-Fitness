import { PageButton } from "../buttons/PageButton";

export const SingleCard = (props) => {
  return (
    <>
      <div className="group/{cards} relative items-center justify-center overflow-hidden shadow-xl rounded-2xl">
        <div className={`min-h-[400px] w-full ${props.bgImage} bg-cover`}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-14 translate-y-[15%] group-hover/{cards}:translate-y-0 transition ease-in-out duration-[0.8s]">
            <p className="text-4xl md:text-5xl uppercase tracking-[0.3em] leading-[1.2]">
              {props.cardLabel}
            </p>
            <div className="opacity-0 group-hover/{cards}:opacity-100 transition ease-in-out duration-[0.5s] flex flex-col items-center justify-center">
              <p className="text-3xl leading-10 pt-8 mb-14">{props.children}</p>
              <PageButton
                buttonBg="bg-[#343434]"
                shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                textColorHover="group-hover/{button}:text-[#fff]"
                btnSrc={props.btnSrc}
              >
                {props.buttonText}
              </PageButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
