import { Link } from "react-router-dom";
import ElevateWhiteIcon from "../../assets/imgs/elevate-white-icon-resized.png";

export const MobileNavList = (props) => {
  return (
    <>
      <div
        className={`w-full h-screen -left-[100%] top-0 fixed px-12 bg-[#d2042d] py-10 text-white z-[99999] transition-all ease-in-out duration-500 ${
          props.stateClick ? "left-[0%] opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link to="/" onClick={props.onHandleClick}>
            <img
              src={ElevateWhiteIcon}
              alt="Elevate Fitness Icon"
              className="h-full w-full"
            />
          </Link>
          <i
            className="fa-solid fa-xmark text-5xl text-white cursor-pointer hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s]"
            onClick={props.onHandleClick}
          />
        </div>
        <ul className="text-3xl gap-10 flex flex-col text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] tracking-wide">
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/about" onClick={props.onCloseMobileMenu}>
              About
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/classes" onClick={props.onCloseMobileMenu}>
              Classes
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/schedule" onClick={props.onCloseMobileMenu}>
              Schedule
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/membership" onClick={props.onCloseMobileMenu}>
              Membership
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/training" onClick={props.onCloseMobileMenu}>
              Training
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/blog" onClick={props.onCloseMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="hover:text-[#000] hover:transition-all hover:ease-in-out hover:duration-[0.3s] hover:font-bold">
            <Link to="/contact" onClick={props.onCloseMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
