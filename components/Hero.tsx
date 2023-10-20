import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[90vh] w-full pt-20 bg-secondary">
      <div className="flex w-full h-full max-container px-10">
        <div className="flex-1">
          <h1 className="text-white text-6xl font-semibold leading-[66px] tracking-wide pt-28">
            Savor the Flavors:
            <br /> Discover Our <br /> Culinary{" "}
            <span className="text-accent font-bold">Delights</span>
          </h1>
        </div>
        <div className="h-full w-full flex-1 relative">
          <div className="w-[670px] h-[670px] rounded-full bg-primary absolute -top-52 -right-48">
            <Image
              src="/hero-img-1.png"
              width={430}
              height={430}
              alt="dish-img"
              className="absolute top-52 -left-40"
            />
            <Image
              src="/hero-img-2.png"
              width={430}
              height={430}
              alt="dish-img"
              className="absolute top-96 -right-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
