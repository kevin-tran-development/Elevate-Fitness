import { Link } from "react-router-dom";
import ElevateWhiteIcon from "../../assets/imgs/elevate-white-icon-resized.png";
import { Button } from "../buttons/Button";

export const NavList = (props) => {
  return (
    <>
      <Link to="/">
        <img
          src={ElevateWhiteIcon}
          alt="Elevate Fitness Icon"
          className="h-full w-full"
        />
      </Link>
      <div className="navbar_menu">
        <ul className="flex text-[18px] text-white gap-10 tracking-wider">
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/classes">Classes</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/schedule">Schedule</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/membership">Membership</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/training">Training</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s] px-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-10">
          <i className="fa-solid fa-right-to-bracket text-4xl text-white cursor-pointer hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s]" />
          <i
            className="fa-solid fa-bars navbar_bars text-4xl text-white cursor-pointer hover:text-[#d2042d] hover:transition-all hover:ease-in-out hover:duration-[0.3s]"
            onClick={props.onHandleClick}
          />
        </div>
        <div className="hidden md:block">
          <Button
            buttonBg="bg-[#D2042D]"
            shadowInset="shadow-[inset_0_0_0_0_#fff]"
            shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#fff]"
            textColorHover="group-hover/{button}:text-[#D2042D]"
            btnSrc="/membership"
          >
            Become a Member
          </Button>
        </div>
      </div>
    </>
  );
};
