module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textFillColor: (theme) => theme("borderColor"),
    textStrokeColor: (theme) => theme("borderColor"),
    textStrokeWidth: (theme) => theme("borderWidth"),
    container: {
      center: true,
    },
    clipPath: {
      imgRightSide:
        "polygon(100% 0%, 100% 50%, 100% 100%, 0 100%, 11% 38%, 18% 0)",
      imgLeftSide: "polygon(0% 0%, 77% 0, 87% 45%, 100% 100%, 0% 100%)",
    },
    paintOrder: {
      fsm: { paintOrder: "fill stroke markers" },
      fms: { paintOrder: "fill markers stroke" },
      sfm: { paintOrder: "stroke fill markers" },
      smf: { paintOrder: "stroke markers fill" },
      mfs: { paintOrder: "markers fill stroke" },
      msf: { paintOrder: "markers stroke fill" },
    },
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        nunito: ["Nunito", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        permanentmarker: ["Permanent Marker", "cursive"],
      },
    },
    backgroundImage: {
      "hero-banner": "url('/src/assets/imgs/elevate-fitness-hero-bg-3.jpg')",
      "bmi-calculate-banner": "url('/src/assets/imgs/ef-bmi-img.jpg')",
      "jtf-banner": "url('/src/assets/imgs/ef-join-the-family-img.jpg')",
      "about-banner": "url('/src/assets/imgs/ef-about-us.jpg')",
      "classes-banner": "url('/src/assets/imgs/ef-classes.jpg')",
      "cardio-banner": "url('/src/assets/imgs/ef-cardio.jpg')",
      "strength-banner": "url('/src/assets/imgs/ef-strength.jpg')",
      "boxing-banner": "url('/src/assets/imgs/ef-boxing.jpg')",
      "mind-body-banner": "url('/src/assets/imgs/ef-mind-body.jpg')",
      "muay-thai-banner": "url('/src/assets/imgs/ef-muay-thai.jpg')",
      "cycling-banner": "url('/src/assets/imgs/ef-cycling.jpg')",
      "schedule-banner": "url('/src/assets/imgs/ef-schedule.jpg')",
      "membership-banner": "url('/src/assets/imgs/ef-membership.jpg')",
      "training-banner": "url('/src/assets/imgs/ef-training.jpg')",
      "blog-banner": "url('/src/assets/imgs/ef-blog.jpg')",
      "contact-banner": "url('/src/assets/imgs/ef-contact.jpg')",
      "error-banner": "url('/src/assets/imgs/ef-error.jpg')",
      "texture-rock-banner":
        "url('/src/assets/imgs/texture-elevate-fitness-bg.jpg')",
      "texture-rock-dark-banner":
        "url('/src/assets/imgs/texture-elevate-fitness-dark-bg.jpg')",
      "cards-tile-bg-1": "url('/src/assets/imgs/elevate-fitness-tiles-1.jpg')",
      "cards-tile-bg-2": "url('/src/assets/imgs/elevate-fitness-tiles-2.jpg')",
      "cards-tile-bg-3": "url('/src/assets/imgs/elevate-fitness-tiles-3.jpg')",
      "cards-tile-bg-4": "url('/src/assets/imgs/elevate-fitness-tiles-4.jpg')",
      "cards-tile-bg-5": "url('/src/assets/imgs/elevate-fitness-tiles-5.jpg')",
      "cards-tile-bg-6": "url('/src/assets/imgs/elevate-fitness-tiles-6.jpg')",
      "cards-tile-bg-7": "url('/src/assets/imgs/elevate-fitness-tiles-7.jpg')",
      "cards-tile-bg-8": "url('/src/assets/imgs/elevate-fitness-tiles-8.jpg')",
      "cards-tile-bg-9": "url('/src/assets/imgs/elevate-fitness-tiles-9.jpg')",
      "blog-tile-1": "url('/src/assets/imgs/ef-blog-img-1.jpg')",
      "blog-tile-2": "url('/src/assets/imgs/ef-blog-img-2.jpg')",
      "blog-tile-3": "url('/src/assets/imgs/ef-blog-img-3.jpg')",
      "blog-tile-4": "url('/src/assets/imgs/ef-blog-img-4.jpg')",
      "blog-tile-5": "url('/src/assets/imgs/ef-blog-img-5.jpg')",
      "blog-tile-6": "url('/src/assets/imgs/ef-blog-img-6.jpg')",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "2md": "816px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "1xl": "1320px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    // all the following default to ['responsive']
    textFillColor: ["responsive"],
    textStrokeColor: ["responsive"],
    textStrokeWidth: ["responsive"],
    paintOrder: ["responsive"],
  },
  plugins: [
    require("tailwind-clip-path"),
    require("tailwindcss-text-fill-stroke")(),
  ],
};
