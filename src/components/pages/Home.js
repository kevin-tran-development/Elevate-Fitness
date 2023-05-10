import { HeroSection } from "../home_components/HeroSection";
import { AboutSection } from "../home_components/AboutSection";
import { FitnessClassesSection } from "../home_components/FitnessClassesSection";
import { FacilitySection } from "../home_components/FacilitySection";
import { PersonalTrainingSection } from "../home_components/PersonalTrainingSection";
import { CalculateBMISection } from "../home_components/CalculateBMISection";
import { TestimonialsSection } from "../home_components/TestimonialsSection";
import { BlogSection } from "../home_components/BlogSection";
import { JoinTheFamilySection } from "../home_components/JoinTheFamilySection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FitnessClassesSection />
      <FacilitySection />
      <PersonalTrainingSection />
      <CalculateBMISection />
      <TestimonialsSection />
      <BlogSection />
      <JoinTheFamilySection />
    </>
  );
};
