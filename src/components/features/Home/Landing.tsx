function Landing() {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center md:flex-row"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #241216 0%, #171717 100%)",
      }}
    >
      <div className="flex flex-col items-center font-poppins md:w-1/2 md:items-start">
        <span className="text-lg font-medium text-white md:text-xl 2xl:text-5xl">
          Hi there ! My name is
        </span>
        <span className="py-4 text-5xl font-semibold text-tertiary-500 md:text-6xl 2xl:text-8xl">
          Noé <span className="text-secondary">CARL</span>
        </span>
        <div className="flex justify-center md:hidden">
          <img src="src\assets\moi.png" className="w-1/2" />
        </div>
        <p className="text-md mt-4 text-center font-raleway font-medium md:text-start md:text-lg 2xl:text-xl">
          I’m a passionate{" "}
          <span className="text-tertiary-500">Front End developer</span> from
          France. I enjoy creating websites and I am constantly looking to{" "}
          <span className="text-tertiary-500">
            expand my knowledge and skills.
          </span>
        </p>

        <button
          type="button"
          className="mt-12 w-fit bg-tertiary-500 p-4 text-sm md:text-lg"
        >
          CONTACT ME !
        </button>
      </div>
      <div className="hidden w-1/2 justify-center md:flex">
        <img src="src\assets\moi.png" className="w-[25vh] md:w-[45vh]" />
      </div>
      <a
        type="button"
        className="absolute bottom-4 hidden md:block"
        href="#about"
      >
        <img src="src\assets\downarrow.svg" />
      </a>
    </section>
  );
}

export default Landing;
