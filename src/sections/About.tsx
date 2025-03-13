import { PrimaryButton } from "../components/PrimaryButton";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-8 py-24 bg-bottom bg-no-repeat fill-screen snap-start snap-always md:px-32 bg-waveMobile lg:bg-wave"
    >
      <div className="flex flex-col items-center justify-center max-w-3xl">
        <p className="mb-4 text-3xl font-bold md:text-4xl md:mb-8">About</p>
        <div className="mb-8 text-lg md:text-xl md:mb-16">
          <p className="mb-4">
            A meticulously organised individual with a passion for detail-oriented work. I find joy in creating efficient systems and processes to simplify complex tasks. Whether its organising my workspace or managing a project, I take pride in being able to streamline workflows and improve productivity. I am always looking for ways to learn and grow, both personally and professionally, and I value teamwork and collaboration as integral components of success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <PrimaryButton label="Resume" href="https://drive.google.com/file/d/1kyIWKj0DqLeBIlN5YGsf5ooX48mFTalk/view" />
        </div>
      </div>
    </section>
  );
};
