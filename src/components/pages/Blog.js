import { PageHero } from "../page_hero_components/PageHero";
import { BlogCards } from "../home_components/BlogCards";
import BlogAvatar from "../../assets/imgs/ef-avatar-img.png";
import { BlogPagination } from "../blog_components/BlogPagination";

export const Blog = () => {
  return (
    <>
      <PageHero bgImage="bg-blog-banner" pageHeader="Blog"></PageHero>
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
          <div className="mt-24 lg:mt-48 grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-x-12">
            <BlogCards
              bgImage="bg-blog-tile-1"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Sarah Johnson"
              blogCategory="Training"
              blogLabel="Transform Your Body and Mind with Elevate Fitness Training"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-2"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Ethan Nguyen"
              blogCategory="Fitness"
              blogLabel="Sweat and Shine: Transform Your Body with These Elevate Fitness Workouts!"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-3"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Marcus Lee"
              blogCategory="Training"
              blogLabel="Take Your Fitness to New Heights with Elevate's Personalized Training Programs"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-4"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Julia Lamb"
              blogCategory="Nutrition"
              blogLabel="Fueling Your Fitness: A Guide to Proper Nutrition with Trainer Julia Lamb"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-5"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Mark Davis"
              blogCategory="Nutrition"
              blogLabel="Nutrition for Optimal Performance: Tips from Trainer Mark Davis at Elevate Fitness"
              btnLabel="Read More"
              btnSrc="/blog"
            />
            <BlogCards
              bgImage="bg-blog-tile-6"
              blogImgSrc={BlogAvatar}
              blogImgAlt="Elevate Fitness logo on a black background"
              blogAuthor="Alex Van"
              blogCategory="Physiotherapy"
              blogLabel="Recovering Strong: How Physiotherapy at Elevate Fitness Can Help You Heal with Trainer Alex Van"
              btnLabel="Read More"
              btnSrc="/blog"
            />
          </div>
          <BlogPagination />
        </div>
      </section>
    </>
  );
};
