import { BlogCards } from "./BlogCards";
import BlogAvatar from "../../assets/imgs/ef-avatar-img.png";

export const BlogSection = () => {
  return (
    <>
      <section className="bg-texture-rock-banner bg-cover bg-[50%] px-12 py-[10rem]">
        <div className="container lg:max-w-screen-xl">
          <div className="text-center">
            <p className="text-5xl font-permanentmarker rotate-[357deg] text-[#d2042d]">
              Our Most Recent News
            </p>
            <h2 className="text-6xl font-bold uppercase tracking-wider pt-16 flex flex-wrap justify-center leading-[1.2]">
              <span className="text-stroke-2 text-fill-transparent">
                Discover
              </span>
              <span className="lg:pl-5">
                our training and fitness blog posts
              </span>
            </h2>
            <p className="text-[18px] pt-8 font-bold">
              Check out the latest highlights on training and fitness tips,
              experiences at the facilities, and much more from the Elevate
              Fitness family.
            </p>
          </div>
          <div className="mt-24 lg:mt-48 grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-10">
            <BlogCards
              bgImage="bg-blog-tile-1"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Kelly Desharnais"
              blogCategory="Training"
              blogLabel="Elevate Your Fitness: How Our Gym Can Take Your Workout to the Next Level"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-2"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Shohei Ohtani"
              blogCategory="Fitness"
              blogLabel="The Ultimate Workout Experience: A Day in the Life of a Member at Elevate Fitness"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-3"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Mike Trout"
              blogCategory="Training"
              blogLabel="Five Common Weight Training Mistakes and How to Fix Them: Tips from Elevate Fitness Trainers"
              btnLabel="Read More"
              btnSrc="/blog"
            />
          </div>
        </div>
      </section>
    </>
  );
};
