import Image from "next/image";

const Vibe = () => {
  return (
    <div className="max-container ">
      <div className="w-full h-[950px] bg-accent mx-auto rounded-lg relative p-4 mb-40 overflow-hidden">
        <div className="group w-[30%] h-[900px] absolute overflow-hidden rounded-lg">
          <Image
            src="/photos-img-1.jpg"
            alt="vibe-photo"
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all"
          />
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed group-hover:scale-105 transition-all">
            Intimate Ambiance
          </p>
        </div>
        <div className="group w-[30%] h-[380px] absolute top-5 left-[35%] overflow-hidden rounded-lg">
          <Image
            src="/photos-img-2.jpg"
            alt="vibe-photo"
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all"
          />
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed group-hover:scale-105 transition-all">
            Five-Star
          </p>
        </div>
        <div className="w-[60%] h-[485px] absolute top-[430px] left-[35%] overflow-hidden rounded-lg">
          <Image
            src="/photos-img-3.jpg"
            alt="vibe-photo"
            width={1500}
            height={900}
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all"
          />
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed group-hover:scale-105 transition-all">
            Elegant Cuisine
          </p>
        </div>
        <div className="absolute right-2 top-10 max-w-[30%]">
          <p className="text-5xl font-semibold text-white leading-[50px]">
            Excuistite cuisine and impeccable service
          </p>
          <button className="btn btn-outline btn-primary mt-6">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
export default Vibe;
