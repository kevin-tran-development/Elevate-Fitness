import ElevateFitnessIcon from "../../assets/imgs/ef-avatar-img.png";
import { TestimonialCards } from "../home_components/TestimonialCards";

export const TrainingReviewsContent = () => {
  return (
    <>
      <div className="px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Elevate Fitness Moments
            </p>
            <h2 className="text-6xl font-bold uppercase tracking-wider pt-16 flex flex-wrap justify-center leading-[1.2]">
              <span className="text-stroke-2 text-fill-transparent">
                Personal Training
              </span>
              <span className="2md:pl-5">at Elevate Fitness</span>
            </h2>
            <p className="text-[18px] pt-8 font-bold">
              Hear about the experience from some of our members that are
              involved with our personal training programs
            </p>
          </div>
          <div className="mt-24 lg:mt-48 grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10">
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="Yuri Markkanen"
              memberReview="I've been working with my personal trainer at Elevate Fitness for six months now, and I can't believe the progress I've made. When I started, I was out of shape and had low energy, but my trainer designed a personalized program that challenged me while still being manageable. Now, I'm stronger, fitter, and have way more energy. I never would have been able to do it on my own."
            />
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="David Riley"
              memberReview="I was always intimidated by the gym, but my personal trainer at Elevate Fitness put me at ease right away. She took the time to listen to my goals and concerns, and then designed a workout plan that was challenging but fun. She's also been really supportive and encouraging, which has helped me stick with it. I've lost weight, gained muscle, and feel better than I have in years."
            />
            <TestimonialCards
              imgSrc={ElevateFitnessIcon}
              imgAlt="Elevate Fitness Icon with a black background"
              memberName="Jessica Torres"
              memberReview="I've been working with the personal trainers at Elevate Fitness for over a year now, and I've never been happier with my fitness. They're knowledgeable, friendly, and always willing to go the extra mile to help me achieve my goals. Plus, the gym itself is fantastic - clean, well-equipped, and with plenty of amenities. I recommend Elevate Fitness to anyone who's serious about getting in shape."
            />
          </div>
        </div>
      </div>
    </>
  );
};
