import { Link } from "react-router-dom";
import { FooterLinksList } from "./FooterLinksList";
import ElevateFitnessLogo from "../../assets/imgs/elevate-black-icon-resized.png";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-left grid grid-cols-1 lg:flex lg:justify-between">
            <div className="flex flex-col max-lg:mb-28 w-[100%] lg:w-1/3">
              <Link to="/">
                <img
                  src={ElevateFitnessLogo}
                  alt="Elevate Fitness logo in black"
                  className="w-[20rem]"
                />
              </Link>
              <p className="text-[16px] font-medium mt-8">
                The desire and focus on making small, incremental gains each and
                every day is the mantra that we strive by.
              </p>
              <div className="flex gap-5 text-3xl mt-10">
                <i className="fa-brands fa-facebook-f cursor-pointer py-4 rounded-full bg-[#efefef] text-[#343434] px-6 hover:bg-[#D2042D] hover:text-[#fff]"></i>
                <i className="fa-brands fa-youtube cursor-pointer py-4 rounded-full bg-[#efefef] text-[#343434] px-6 hover:bg-[#D2042D] hover:text-[#fff]"></i>
                <i className="fa-brands fa-instagram cursor-pointer py-4 rounded-full bg-[#efefef] text-[#343434] px-6 hover:bg-[#D2042D] hover:text-[#fff]"></i>
                <i className="fa-brands fa-twitter cursor-pointer py-4 rounded-full bg-[#efefef] text-[#343434] px-6 hover:bg-[#D2042D] hover:text-[#fff]"></i>
              </div>
              <p className="text-[14px] font-bold mt-10 tracking-widest">
                Subscribe to our newsletter!
              </p>
              <form className="flex w-full h-[50px] gap-8 mt-4">
                <input
                  className="pl-6 w-[50%] bg-transparent border-2 border-solid border-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                  placeholder="Email:"
                  type="text"
                />
                <div className="w-[50%] flex items-center justify-center rounded-tr-[2rem] cursor-pointer transition ease-out duration-[0.5s] font-medium tracking-wider group/{footer} bg-[#343434] shadow-[inset_0_0_0_0_#D2042D] hover:shadow-[inset_300px_0_0_0_#D2042D]">
                  <Link
                    to="/"
                    className="text-white group-hover/{footer}:text-[#fff] text-[16px]"
                  >
                    Subscribe
                  </Link>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[10rem]">
              <FooterLinksList
                label="Company"
                itemOne="About"
                itemTwo="Contact"
                itemThree="Blog"
                itemFour="Gallery"
                itemFive=""
              />
              <FooterLinksList
                label="Services"
                itemOne="Classes"
                itemTwo="Schedule"
                itemThree="Membership"
                itemFour="Training"
                itemFive=""
              />
              <FooterLinksList
                label="Legal"
                itemOne="Contact"
                itemTwo="Terms"
                itemThree="Licenses"
                itemFour="Accessibility"
                itemFive="Privacy Policy"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
