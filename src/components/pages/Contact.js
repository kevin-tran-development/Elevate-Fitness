import { PageButton } from "../buttons/PageButton";
import { PageHero } from "../page_hero_components/PageHero";

export const Contact = () => {
  return (
    <>
      <PageHero bgImage="bg-contact-banner" pageHeader="Contact"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem] max-lg:pb-[16rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="grid max-2md:text-center grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full">
              <p className="text-5xl lg:text-6xl font-permanentmarker rotate-[357deg] text-[#d2042d] mb-12">
                Elevate Fitness
              </p>
              <h2 className="text-6xl lg:text-7xl font-bold tracking-wide uppercase">
                Get in Touch
              </h2>
              <p className="mt-14 text-[18px] font-medium">
                We love hearing from our community! Whether you have a question,
                concern, or just want to say hello, our team is here to help.
                Please use the form below to send us a message, and we'll get
                back to you as soon as we can. Thank you for your interest in
                Elevate Fitness!
              </p>
              <div className="mt-24">
                <h3 className="text-5xl font-bold">Our Facilities</h3>
                <div className="max-2md:mx-auto border-b-4 border-[#D2042D] w-[20%] mt-4 mb-10"></div>
                <p className="text-[18px] font-bold">Edmonton Location -</p>
                <p className="text-[18px] font-medium">666-666-6666</p>
                <p className="text-[18px] font-medium">
                  888 Naitwell Rd Blvd, Edmonton, AB, T2T2T2
                </p>
                <p className="text-[18px] font-bold pt-8">Toronto Location -</p>
                <p className="text-[18px] font-medium">777-777-7777</p>
                <p className="text-[18px] font-medium">
                  5555 Bay St, Toronto, ON, M2M2M2
                </p>
                <p className="text-[18px] font-bold pt-8">
                  Elevate Fitness Corporate -
                </p>
                <p className="text-[18px] font-medium">
                  elevatefitness@gmail.com
                </p>
                <p className="text-[18px] font-medium">1666-666-6666</p>
              </div>
              <div className="mt-24">
                <h3 className="text-5xl font-bold">Facility Hours</h3>
                <div className="max-2md:mx-auto border-b-4 border-[#D2042D] w-[20%] mt-4 mb-10"></div>
                <p className="text-[18px] font-bold">Monday - Friday</p>
                <p className="text-[18px] font-medium">6:00 AM - 10:00 PM</p>
                <p className="text-[18px] font-bold pt-8">Saturday & Sunday</p>
                <p className="text-[18px] font-medium">5:00 AM - 10:00 PM</p>
                <p className="text-[14px] font-bold pt-8">
                  *All members apart of the Skyline membership tier will have
                  24/7 access.
                </p>
              </div>
              <div className="mt-24">
                <h3 className="text-5xl font-bold">Connect With Us</h3>
                <div className="max-2md:mx-auto border-b-4 border-[#D2042D] w-[20%] mt-4 mb-10"></div>
                <div className="max-2md:justify-center flex gap-5 text-3xl mt-10">
                  <i className="fa-brands fa-facebook-f cursor-pointer py-4 rounded-full bg-[#343434] text-[#fff] px-6 hover:bg-[#D2042D] "></i>
                  <i className="fa-brands fa-youtube cursor-pointer py-4 rounded-full bg-[#343434] text-[#fff] px-6 hover:bg-[#D2042D] "></i>
                  <i className="fa-brands fa-instagram cursor-pointer py-4 rounded-full bg-[#343434] text-[#fff] px-6 hover:bg-[#D2042D] "></i>
                  <i className="fa-brands fa-twitter cursor-pointer py-4 rounded-full bg-[#343434] text-[#fff] px-6 hover:bg-[#D2042D] "></i>
                </div>
              </div>
            </div>

            <div className="max-lg:mt-24 bg-[#fff] px-12 py-16 sm:px-20 sm:py-20 h-full lg:h-[60%]">
              <h3 className="text-5xl font-bold">Have any questions?</h3>
              <div className="max-2md:mx-auto border-b-4 border-[#D2042D] w-[30%] mt-6 mb-14"></div>
              <form className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-10">
                <input
                  className="pl-6 pr-6 w-[100%] h-[50px] bg-transparent border-2 border-solid border-[#808080] focus-visible:outline-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                  placeholder="Name:"
                  type="text"
                />
                <input
                  className="pl-6 pr-6 w-[100%] h-[50px] bg-transparent border-2 border-solid border-[#808080] focus-visible:outline-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                  placeholder="Phone:"
                  type="number"
                />
                <input
                  className="lg:col-span-2 pl-6 pr-6 w-[100%] h-[50px] bg-transparent border-2 border-solid border-[#808080] focus-visible:outline-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                  placeholder="Email:"
                  type="email"
                />
                <select
                  name="contact"
                  className="lg:col-span-2 pl-6 pr-6 w-[100%] h-[50px] bg-transparent border-2 border-solid border-[#808080] focus-visible:outline-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                >
                  <option>Select Class</option>
                  <option value="strength">Strength</option>
                  <option value="cardio">Cardio</option>
                  <option value="mindbody">Mind & Body</option>
                  <option value="cycling">Cycling</option>
                  <option value="boxing">Boxing</option>
                  <option value="muaythai">Muay Thai</option>
                </select>
                <textarea
                  className="lg:col-span-2 pl-6 pr-6 pt-4 w-[100%] h-[200px] bg-transparent border-2 border-solid border-[#808080] focus-visible:outline-[#D2042D] rounded-tr-[2rem] text-[16px] text-black"
                  placeholder="Comment:"
                  type="text"
                />
              </form>
              <div className="max-2md:flex max-2md:justify-center">
                <PageButton
                  buttonBg="bg-[#343434]"
                  shadowInset="shadow-[inset_0_0_0_0_#D2042D]"
                  shadowInsetHover="hover:shadow-[inset_300px_0_0_0_#D2042D]"
                  textColorHover="group-hover/{button}:text-[#fff]"
                  btnSrc="/contact"
                >
                  Submit Inquiry
                </PageButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
