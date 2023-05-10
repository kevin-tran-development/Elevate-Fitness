import { SingleCard } from "./SingleCard";

export const Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10">
        <SingleCard
          cardLabel="Classes"
          buttonText="See classes"
          bgImage="bg-cards-tile-bg-1"
          btnSrc="/classes"
        >
          Strive for continuous growth and progress together!
        </SingleCard>
        <SingleCard
          cardLabel="Membership"
          buttonText="Join the family"
          bgImage="bg-cards-tile-bg-3"
          btnSrc="/membership"
        >
          Visualize, focus, and execute your goals. Be better than yesterday.
        </SingleCard>
        <SingleCard
          cardLabel="Personal Training"
          buttonText="Learn More"
          bgImage="bg-cards-tile-bg-2"
          btnSrc="/training"
        >
          Move and grow at your own pace. We'll assist you every step of the
          way.
        </SingleCard>
      </div>
    </>
  );
};
