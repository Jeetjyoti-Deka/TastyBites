import Image from "next/image";
import Modal from "./Modal";
import ModalButton from "./ModalButton";

const Vibe = () => {
  return (
    <div className="max-container">
      <div className="hidden lg:block w-full h-[950px] bg-accent mx-auto rounded-lg relative p-4 mb-40 overflow-hidden">
        <div className="group w-[30%] h-[900px] absolute overflow-hidden rounded-lg">
          <Image
            src="/photos-img-1.jpg"
            alt="vibe-photo"
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all"
          />
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed">
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
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed">
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
          <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed">
            Elegant Cuisine
          </p>
        </div>
        <div className="absolute right-2 top-10 max-w-[30%]">
          <p className="text-5xl font-semibold text-white leading-[50px]">
            Excuistite cuisine and impeccable service
          </p>
          <Modal randomId="1" />
          <ModalButton
            randomId="1"
            className="btn btn-outline btn-secondary border-2 text-md mt-6 active:text-white active:border-none transition-all"
          >
            Contact Us
          </ModalButton>
        </div>
      </div>

      <div className="mb-28 bg-accent lg:hidden flex flex-col items-center">
        <div className="hide-scrollbar flex h-[500px] w-full items-start justify-start gap-8 overflow-x-auto p-4">
          <div className="relative min-w-[600px] rounded-lg overflow-hidden">
            <Image
              src="/photos-sm-img-1.jpg"
              alt="vibe-photo"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed transition-all">
              Intimate Ambiance
            </p>
          </div>
          <div className="relative min-w-[550px] rounded-lg overflow-hidden">
            <Image
              src="/photos-img-2.jpg"
              alt="vibe-photo"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed group-hover:scale-105 transition-all">
              Elegant Cuisine
            </p>
          </div>
          <div className="relative min-w-[600px] rounded-lg overflow-hidden">
            <Image
              src="/photos-img-3.jpg"
              alt="vibe-photo"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
            />
            <p className="absolute bottom-4 right-4 text-black/60 text-xl bg-white px-2 py-1 rounded-sm font-medium border-2 border-black/70 border-dashed">
              Five-Star
            </p>
          </div>
        </div>
        <p className="text-white text-center text-3xl font-semibold tracking-wide pb-4">
          Excuistite cuisine and impeccable service
        </p>
        <Modal randomId="2" />
        <ModalButton
          randomId="2"
          className="btn btn-outline btn-secondary border-2 text-md mt-6 mb-10 active:bg-secondary active:text-white active:border-none transition-all"
        >
          Contact Us
        </ModalButton>
      </div>
    </div>
  );
};
export default Vibe;
