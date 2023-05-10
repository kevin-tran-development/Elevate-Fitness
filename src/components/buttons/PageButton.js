import { Link } from "react-router-dom";

const BUTTON_BG = ["bg-[#D2042D]", "bg-[#343434]"];
const SHADOW_INSET = [
  "shadow-[inset_0_0_0_0_#fff]",
  "shadow-[inset_0_0_0_0_#D2042D]",
];
const SHADOW_INSET_HOVER = [
  "hover:shadow-[inset_300px_0_0_0_#fff]",
  "hover:shadow-[inset_300px_0_0_0_#D2042D]",
];
const TEXT_COLOR_HOVER = [
  "group-hover/{button}:text-[#D2042D]",
  "group-hover/{button}:text-[#fff]",
];

export const PageButton = (props) => {
  const checkButtonBg = BUTTON_BG.includes(props.buttonBg)
    ? props.buttonBg
    : BUTTON_BG[0];
  const checkShadowInset = SHADOW_INSET.includes(props.shadowInset)
    ? props.shadowInset
    : SHADOW_INSET[0];
  const checkShadowInsetHover = SHADOW_INSET_HOVER.includes(
    props.shadowInsetHover
  )
    ? props.shadowInsetHover
    : SHADOW_INSET_HOVER[0];
  const checkTextColorHover = TEXT_COLOR_HOVER.includes(props.textColorHover)
    ? props.textColorHover
    : TEXT_COLOR_HOVER[0];

  return (
    <>
      <div
        className={`py-4 w-72 rounded-lg cursor-pointer transition ease-out duration-[0.5s] font-semibold group/{button} ${checkButtonBg} ${checkShadowInset} ${checkShadowInsetHover}`}
      >
        <Link
          to={props.btnSrc}
          onClick={props.onClick}
          className={`flex items-center justify-center text-white p-2 ${checkTextColorHover}`}
        >
          <p
            className={`uppercase text-[14px] tracking-wider px-2 ${checkTextColorHover}`}
          >
            {props.children}
          </p>
          <i className="fa-solid fa-right-long text-2xl pl-2 pr-2" />
        </Link>
      </div>
    </>
  );
};
