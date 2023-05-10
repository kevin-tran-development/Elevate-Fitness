import { FacilitySingleCard } from "./FacilitySingleCard";

export const FacilityCard = (props) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-10">
        <FacilitySingleCard
          cardLabel="Powerlifting / Crossfit Equipment"
          bgImage="bg-cards-tile-bg-4"
          borderColor={props.borderColor}
        />
        <FacilitySingleCard
          cardLabel="High-end Equipment"
          bgImage="bg-cards-tile-bg-5"
          borderColor={props.borderColor}
        />
        <FacilitySingleCard
          cardLabel="Boxing / Muay Thai Equipment & Rings"
          bgImage="bg-cards-tile-bg-6"
          borderColor={props.borderColor}
        />
        <FacilitySingleCard
          cardLabel="Private Workout Studios"
          bgImage="bg-cards-tile-bg-7"
          borderColor={props.borderColor}
        />
        <FacilitySingleCard
          cardLabel="Secure Lockers & Towel Service"
          bgImage="bg-cards-tile-bg-8"
          borderColor={props.borderColor}
        />
        <FacilitySingleCard
          cardLabel="Dedicated Workspaces"
          bgImage="bg-cards-tile-bg-9"
          borderColor={props.borderColor}
        />
      </div>
    </>
  );
};
