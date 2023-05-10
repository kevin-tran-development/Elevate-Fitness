import FitnessLogo1 from "../../assets/imgs/fitness-logo-1.png";
import FitnessLogo2 from "../../assets/imgs/fitness-logo-2.png";
import FitnessLogo3 from "../../assets/imgs/fitness-logo-3.png";
import FitnessLogo4 from "../../assets/imgs/fitness-logo-4.png";

export const SponsoredLogos = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <img
          className="hover:brightness-[60%] transition ease duration-[0.3s] mx-auto"
          src={FitnessLogo1}
          alt="Fitness Center Logo"
        />
        <img
          className="hover:brightness-[60%] transition ease duration-[0.3s] mx-auto"
          src={FitnessLogo2}
          alt="Fitness Center Logo"
        />
        <img
          className="hover:brightness-[60%] transition ease duration-[0.3s] mx-auto"
          src={FitnessLogo3}
          alt="Fitness Center Logo"
        />
        <img
          className="hover:brightness-[60%] transition ease duration-[0.3s] mx-auto"
          src={FitnessLogo4}
          alt="Fitness Center Logo"
        />
      </div>
    </>
  );
};
