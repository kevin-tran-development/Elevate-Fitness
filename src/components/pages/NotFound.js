import { PageButton } from "../buttons/PageButton";
import { PageHero } from "../page_hero_components/PageHero";

export const NotFound = () => {
  return (
    <>
      <PageHero bgImage="bg-error-banner" pageHeader="Error 404"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[20rem]">
        <div className="container lg:max-w-screen-xl">
          <p className="text-6xl md:text-8xl uppercase tracking-wider text-center">
            Page not found
          </p>
          <p className="text-[18px] text-center mt-16 font-medium">
            The page requested couldn't be found. This could be a spelling error
            in the URL or a removed page.
          </p>
          <div className="flex justify-center mt-10">
            <PageButton
              buttonBg="bg-[#343434]"
              shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
              shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
              textColorHover="group-hover/{button}:text-[#fff]"
              btnSrc="/"
            >
              Back to home
            </PageButton>
          </div>
        </div>
      </section>
    </>
  );
};
