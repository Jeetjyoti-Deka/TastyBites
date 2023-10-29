"use client";

import { Foods } from "@/constants";
import Image from "next/image";
import Modal from "./Modal";
import { showModal } from "@/utils/helpers";

type MenuCardProps = {
  food: (typeof Foods)[number];
};

const MenuCard = ({ food }: MenuCardProps) => {
  return (
    <div className="min-w-[15rem] bg-gray-200 bg-opacity-80 flex flex-col items-center gap-4 px-5 pb-7 pt-4 rounded-2xl">
      <div>
        <Image
          src="/menu-card-img.png"
          alt="card-img"
          width={120}
          height={120}
        />
      </div>
      <h2 className="text-center font-semibold text-secondary text-lg leading-6">
        {food.name}
      </h2>
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-secondary">$ {food.price}</p>
        <Modal randomId="3" />
        <button
          className="w-[45px] h-[45px] rounded-full bg-accent flex items-center justify-center active:scale-90 active:bg-primary transition-all"
          onClick={() => showModal("3")}
        >
          <Image src="/phone-icon.png" alt="phone" width={18} height={19} />
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
