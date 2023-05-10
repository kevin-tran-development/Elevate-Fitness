export const TestimonialCards = (props) => {
  return (
    <>
      <div className="bg-[#f5f6f7] shadow-2xl px-14 py-16 rounded-3xl hover:scale-105 transition ease duration-[0.4s]">
        <div className="flex flex-col h-full justify-center">
          <p className="text-stroke-2 text-fill-transparent text-9xl font-permanentmarker">
            “
          </p>
          <p className="text-[16px]">{props.memberReview}</p>
          <div className="mt-14 flex items-center gap-6">
            <img
              src={props.imgSrc}
              className="w-[15%] md:w-[12%] lg:w-[20%]"
              alt={props.imgAlt}
            />
            <p className="text-[16px] font-medium">{props.memberName}</p>
          </div>
        </div>
      </div>
    </>
  );
};
