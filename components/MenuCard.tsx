import { Foods } from "@/constants";
import Image from "next/image";
import Modal from "./Modal";
import ModalButton from "./ModalButton";

type MenuCardProps = {
  food: (typeof Foods)[number];
};

const MenuCard = ({ food }: MenuCardProps) => {
  return (
    <div className="group min-w-[15rem] bg-gray-200 bg-opacity-80 flex flex-col items-center justify-between gap-4 px-5 pb-7 pt-4 rounded-2xl">
      <div className="rounded-full overflow-hidden">
        <Image
          src={food.img}
          alt="card-img"
          width={150}
          height={120}
          className="group-hover:scale-105 transition-all"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-center font-semibold text-secondary text-lg leading-6">
          {food.name}
        </h2>
        <div className="flex justify-between items-center w-full pl-4 pr-2">
          <p className="font-semibold text-secondary">$ {food.price}</p>
          <Modal randomId="3" />
          <ModalButton
            randomId="3"
            className="w-[45px] h-[45px] rounded-full bg-accent flex items-center justify-center active:scale-90 active:bg-primary transition-all"
          >
            <Image src="/phone-icon.png" alt="phone" width={18} height={19} />
          </ModalButton>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
