import { useState } from "react";
import { Link } from "react-router-dom";

export const BlogPagination = () => {
  let [number, setNumber] = useState(1);

  const pages = [
    { page: number },
    { page: number + 1 },
    { page: number + 2 },
    { page: number + 3 },
  ];

  function Next() {
    setNumber(++number);
  }

  function Previous() {
    number > 1 && setNumber(--number);
  }

  return (
    <>
      <div className="flex justify-center mt-24">
        <button
          onClick={Previous}
          className="w-20 h-20 border-2 border-r-0 rounded-l-xl border-[#D2042D] hover:bg-[#D2042D] hover:text-white transition ease-in-out duration-[0.3s]"
        >
          <i className="fa-solid fa-caret-left text-3xl" />
        </button>

        {pages.map((pg, i) => (
          <Link
            key={i}
            to="/blog"
            className="w-20 h-20 border-2 border-r-0 border-[#D2042D] text-2xl font-bold hover:bg-[#D2042D] hover:text-white transition ease-in-out duration-[0.3s] flex items-center justify-center"
          >
            {pg.page}
          </Link>
        ))}

        <button
          onClick={Next}
          className="w-20 h-20 border-2 rounded-r-xl border-[#D2042D] hover:bg-[#D2042D] hover:text-white transition ease-in-out duration-[0.3s]"
        >
          <i className="fa-solid fa-caret-right text-3xl" />
        </button>
      </div>
    </>
  );
};
