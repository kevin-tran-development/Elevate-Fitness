import { TestimonialCards } from "./TestimonialCards";
import ElevateFitnessIcon from "../../assets/imgs/ef-avatar-img.png";

export const TestimonialsSection = () => {
  return (
    <>
      <section className="bg-white px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Elevate Fitness Moments
            </p>
            <h2 className="text-6xl font-bold uppercase tracking-wider pt-16 flex flex-wrap justify-center leading-[1.2]">
              <span className="text-stroke-2 text-fill-transparent">
                The Experience
              </span>
              <span className="2md:pl-5">at Elevate Fitness</span>
            </h2>
            <p className="text-[18px] pt-8 font-bold">
              Hear about the experience from some of our members since becoming
              part of the Elevate Fitness family!
            </p>
          </div>
          <div className="mt-24 lg:mt-48 grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10">
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="Terry McDavid"
              memberReview="Elevate Fitness has been a game-changer for me. From the moment I
              walked through the doors, I was blown away by the sleek and modern
              design of the gym. The equipment is top-notch and always impeccably
              maintained. But what really sets Elevate apart is the staff. They
              are knowledgeable, friendly, and always willing to go the extra mile
              to ensure that I am achieving my fitness goals. The classes are
              challenging and fun, and the personal training is truly
              transformative. I have never felt better, physically or mentally,
              than I do now that I am a member of Elevate Fitness."
            />
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="Joseph Kane"
              memberReview="I have been a member of several gyms over the years, but none compare to Elevate Fitness. The attention to detail is unmatched, from the cleanliness of the facility to the quality of the equipment. The trainers are all highly experienced and motivated, and the variety of classes is impressive. I particularly enjoy the yoga and Pilates offerings, which provide a much-needed balance to my weight training routine. I appreciate that the gym is never overcrowded, which allows me to focus on my workout without any distractions. Overall, Elevate Fitness is worth every penny."
            />
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="Alex Draisaitl"
              memberReview="Elevate Fitness is the epitome of luxury gyms. From the moment I step into the locker room, I feel pampered and taken care of. The amenities are first-rate, including the sauna, steam room, and fully stocked showers. But the real standout for me is the group fitness classes. They are expertly led, challenging, and always different. I have met some amazing people in these classes and the sense of community at Elevate is truly special. The trainers are approachable and knowledgeable, and I feel like they genuinely care about my fitness journey. I cannot recommend Elevate Fitness enough."
            />
          </div>
        </div>
      </section>
    </>
  );
};
