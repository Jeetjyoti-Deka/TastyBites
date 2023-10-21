import { Foods } from "@/constants";
import Image from "next/image";

const MenuTable = () => {
  return (
    <div>
      {Foods.map((item, index) => (
        <div
          key={index}
          className="w-full bg-gray-500 py-2 xs:px-6 mb-3 xs:mb-0 rounded-xl border-2 xs:border-b-black border-t-0 flex items-center justify-between "
        >
          <div>
            <Image
              src="/menu-card-img.png"
              alt="card-img"
              width={40}
              height={40}
            />
          </div>
          <h2 className="flex-1 text-left ml-2 2xs:ml-10 xs:font-semibold text-white whitespace-nowrap text-ellipsis overflow-hidden">
            {item.name}
          </h2>
          <p className="flex-1 xs:font-medium text-center text-white/50 whitespace-nowrap mr-1 xs:mr-0">
            $ {item.price}
          </p>
          <button className=" w-[36px] h-[36px] rounded-full bg-accent hidden 2xs:flex items-center justify-center active:scale-90 active:bg-primary transition-all mr-2">
            <Image src="/phone-icon.png" alt="phone" width={15} height={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
export default MenuTable;
