import Image from "next/image";

const Hero = () => {
  return (
    <div className="xl:h-[80vh] sm:min-h-[550px] w-full pb-20 sm:pb-0 pt-20 mb-20 sm:mb-40 bg-burger bg-cover sm:bg-secondary sm:bg-none overflow-hidden">
      <div className="flex w-full h-full max-container py-20 px-10">
        <div className="flex-1">
          <h1 className="text-secondary sm:text-white text-xl xs:text-3xl sm:text-5xl md:text-6xl font-bold sm:font-semibold md:leading-[66px] tracking-wide xs:pt-20 lg:pt-28 z-50">
            Savor the Flavors:
            <br /> Discover Our <br /> Culinary{" "}
            <span className="text-accent font-bold">Delights</span>
          </h1>
        </div>
        <div className="h-full w-full flex-1 relative hidden sm:block">
          <div className="hero-img-section">
            <Image
              src="/hero-img-1.png"
              width={430}
              height={430}
              alt="dish-img"
              className="absolute top-52 -left-40 hidden xl:block"
            />
            <Image
              src="/burger-img.png"
              width={430}
              height={430}
              alt="dish-img"
              className="absolute top-80 -left-40 xl:hidden -rotate-45 rounded-full"
            />
            <Image
              src="/hero-img-2.png"
              width={430}
              height={430}
              alt="dish-img"
              className="absolute top-96 -right-20 hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
