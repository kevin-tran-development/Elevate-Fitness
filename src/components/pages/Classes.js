import { PageHero } from "../page_hero_components/PageHero";
import { ClassesIntro } from "../classes_components/ClassesIntro";
import { ClassesContent } from "../classes_components/ClassesContent";

export const Classes = () => {
  return (
    <>
      <PageHero bgImage="bg-classes-banner" pageHeader="Classes"></PageHero>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <ClassesIntro />
          <ClassesContent />
        </div>
      </section>
    </>
  );
};
