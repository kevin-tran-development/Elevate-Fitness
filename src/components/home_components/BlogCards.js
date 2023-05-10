import { Link } from "react-router-dom";
import { PageButton } from "../buttons/PageButton";

export const BlogCards = (props) => {
  return (
    <>
      <div className="relative items-center justify-center overflow-hidden shadow-xl rounded-3xl group">
        <div className={`min-h-[500px] ${props.bgImage} bg-cover`}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute w-[90%] left-0 right-0 ml-auto mr-auto bottom-0 bg-white h-[500px] px-12 py-14 translate-y-[43%] group-hover:translate-y-[24%] transition ease-in-out duration-[0.8s]">
            <Link to="/" className="flex items-center gap-6 mb-10">
              <img
                src={props.blogImgSrc}
                className="w-[15%]"
                alt={props.blogImgAlt}
              />
              <p className="text-[16px] font-medium">{props.blogAuthor}</p>
            </Link>
            <Link to="/" className="flex">
              <p className="uppercase font-bold text-[14px] bg-[#f5f6f7] tracking-wider text-[#343434] px-4 py-2">
                {props.blogCategory}
              </p>
            </Link>
            <Link to="/blog">
              <p className="text-3xl font-bold mt-10 mb-16 leading-10">
                {props.blogLabel}
              </p>
            </Link>
            <div className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[0.5s]">
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
      </div>
    </>
  );
};
