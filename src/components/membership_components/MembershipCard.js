import { PageButton } from "../buttons/PageButton";
import membershipData from "../membership_components/membership_data/MembershipData";

export const MembershipCard = (props) => {
  return (
    <>
      <div
        className={`${props.bgColor} rounded-2xl shadow-xl xl:w-[35rem] px-12 py-16`}
      >
        <div className="flex flex-col text-center">
          <p className={`${props.txtColor} font-bold text-5xl tracking-wide`}>
            {props.tierLabel}
          </p>
          <div className="flex justify-center mt-6">
            <p
              className={`${props.txtColor} text-4xl font-medium relative top-[1rem] pr-2`}
            >
              $
            </p>
            <p className={`${props.txtColor} text-8xl font-bold`}>
              {props.tierPriceDollar}
            </p>
            <p
              className={`${props.txtColor} text-4xl font-medium relative top-[1rem] pl-2`}
            >
              {props.tierPriceCents}
            </p>
          </div>
          <p className={`${props.txtColor} text-[16px] font-medium pt-4`}>
            every other week
          </p>
          <div className="mx-auto mt-8 mb-16">
            <PageButton
              buttonBg={props.buttonBg}
              shadowInset={props.shadowInset}
              shadowInsetHover={props.shadowInsetHover}
              textColorHover={props.textColorHover}
              btnSrc="/contact"
            >
              Get Started
            </PageButton>
          </div>
          <span className="border border-[#D3D3D3]"></span>
          <div className="flex flex-col gap-8 pt-16 pb-16">
            {membershipData
              .filter((features) => features.tier === props.tierName)
              .map((tierFiltered) => (
                <p className={`text-[18px] ${props.txtColor} font-medium`}>
                  {tierFiltered.feature}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
