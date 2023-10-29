import Image from "next/image";
import Modal from "./Modal";
import ModalButton from "./ModalButton";

const Delivery = () => {
  return (
    <div
      id="delivery"
      className="max-container mb-32 px-2 2xs:px-10 sm:px-20 2xs:flex justify-center scroll-mt-20"
    >
      <div className="lg:ml-36 bg-delivery bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center 2xs:items-stretch 2xs:bg-none h-[300px] 2xs:h-auto">
        <h2 className="text-lg text-secondary bg-white backdrop-blur-lg py-2 2xs:py-0 text-center 2xs:text-left leading-5 sm:text-2xl md:text-4xl font-semibold mb-4 md:mb-10 lg:max-w-lg xs:mt-10 lg:mt-20">
          Prompt and Punctual: Our Commitment to On-Time Delivery
        </h2>
        <Modal randomId="4" />
        <ModalButton
          randomId="4"
          className="btn 2xs:bg-none bg-white btn-sm sm:btn-md btn-outline btn-primary rounded-full px-3 sm:px-7 sm:tracking-wider whitespace-nowrap active:bg-primary active:text-accent transition-all"
        >
          Call to Order
        </ModalButton>
      </div>
      <div className="hidden 2xs:block">
        <Image
          src="/delivery-img.png"
          alt="delivery-img"
          width={700}
          height={700}
          className=""
        />
      </div>
    </div>
  );
};
export default Delivery;
