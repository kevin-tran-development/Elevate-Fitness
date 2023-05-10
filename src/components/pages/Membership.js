import { PageHero } from "../page_hero_components/PageHero";
import { MembershipCard } from "../membership_components/MembershipCard";

export const Membership = () => {
  return (
    <>
      <PageHero
        bgImage="bg-membership-banner"
        pageHeader="Membership"
      ></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Elevate all aspects in your life, join the family today
            </p>
            <h2 className="text-black text-6xl font-bold uppercase tracking-wider pt-16 leading-[1.2]">
              Choose your membership
            </h2>
          </div>
          <div className="mt-24 md:mt-48">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <MembershipCard
                  bgColor="bg-[#fff]"
                  txtColor="text-[#343434]"
                  tierLabel="Ascend"
                  tierPriceDollar="30"
                  tierPriceCents=".99"
                  tierName="Ascend"
                  buttonBg="bg-[#343434]"
                  shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                  textColorHover="group-hover/{button}:text-[#fff]"
                />
                <MembershipCard
                  bgColor="bg-[#D2042D]"
                  txtColor="text-[#fff]"
                  tierLabel="Summit"
                  tierPriceDollar="39"
                  tierPriceCents=".99"
                  tierName="Summit"
                  buttonBg="bg-[#343434]"
                  shadowInset="shadow-[inset_0_0_0_0_#FFF]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#FFF]"
                  textColorHover="group-hover/{button}:text-[#D2042D]"
                />
                <MembershipCard
                  bgColor="bg-[#fff]"
                  txtColor="text-[#343434]"
                  tierLabel="Skyline"
                  tierPriceDollar="50"
                  tierPriceCents=".99"
                  tierName="Skyline"
                  buttonBg="bg-[#343434]"
                  shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                  textColorHover="group-hover/{button}:text-[#fff]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
