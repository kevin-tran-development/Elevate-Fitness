import { Link } from "react-router-dom";

const BORDER_COLOR = ["border-[#d2042d]", "border-[#343434]"];
const BEFORE_BG = ["before:bg-[#d2042d]", "before:bg-[#343434]"];

export const TransparentButton = (props) => {
  const checkBorderColor = BORDER_COLOR.includes(props.borderColor)
    ? props.borderColor
    : BORDER_COLOR[0];
  const checkBeforeBg = BEFORE_BG.includes(props.beforeBg)
    ? props.beforeBg
    : BEFORE_BG[0];

  return (
    <>
      <div
        className={`py-6 px-6 rounded-lg cursor-pointer text-white border-2 border-solid ${checkBorderColor} w-72 text-center relative z-[1] transition ease-out duration-[0.3s] before:absolute before:top-0 before:left-[50%] before:right-[50%] before:bottom-0 before:opacity-0 ${checkBeforeBg} before:transition-all before:ease before:duration-[0.5s] hover:before:left-0 hover:before:right-0 hover:before:opacity-100 hover:before:z-[-1] hover:before:transition-all hover:before:ease hover:before:duration-[0.5s]`}
      >
        <Link
          to={props.btnSrc}
          className="text-[16px] uppercase tracking-widest font-semibold"
        >
          {props.children}
        </Link>
      </div>
    </>
  );
};
