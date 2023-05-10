export const FooterLinksList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <p className="uppercase text-[22px] font-bold tracking-wider">
          {props.label}
        </p>
        <div className="border-2 border-[#D2042D] mb-4 w-[20%] md:w-[40%] lg:w-[60%]"></div>
        <p className="text-[18px] cursor-pointer font-medium hover:text-[#D2042D] hover:underline">
          {props.itemOne}
        </p>
        <p className="text-[18px] cursor-pointer font-medium hover:text-[#D2042D] hover:underline">
          {props.itemTwo}
        </p>
        <p className="text-[18px] cursor-pointer font-medium hover:text-[#D2042D] hover:underline">
          {props.itemThree}
        </p>
        <p className="text-[18px] cursor-pointer font-medium hover:text-[#D2042D] hover:underline">
          {props.itemFour}
        </p>
        {props.itemFive ? (
          <p className="text-[18px] cursor-pointer font-medium hover:text-[#D2042D] hover:underline">
            {props.itemFive}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
