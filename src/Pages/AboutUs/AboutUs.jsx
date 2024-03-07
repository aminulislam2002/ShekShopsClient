import aboutUsImage from "../../assets/AboutUs/about_us.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-10 md:my-16 lg:my-20">
      <div className="nc-SectionHero relative">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
          <div className="w-full max-w-lg space-y-5 lg:space-y-7">
            <h2 className="text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl dark:text-neutral-100">
              👋 About Us
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We’re impartial and independent, creating distinctive, world-class programmes and content that inform,
              educate, and entertain millions of people around the world every day.
            </p>
          </div>
          <div className="flex-grow">
            <img src={aboutUsImage} className="rounded-lg shadow-lg" alt="About us image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
