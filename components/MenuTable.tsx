import Image from "next/image";

const MenuTable = () => {
  return (
    <div>
      {Array(8)
        .fill(1)
        .map((item) => (
          <div className="w-full bg-gray-500 py-2 xs:px-6 mb-3 xs:mb-0 rounded-xl border-2 xs:border-b-black border-t-0 flex items-center justify-between">
            <div>
              <Image
                src="/menu-card-img.png"
                alt="card-img"
                width={40}
                height={40}
              />
            </div>
            <h2 className="text-center xs:font-semibold text-white whitespace-nowrap text-ellipsis overflow-hidden">
              Diamond Dust Filet Mignon
            </h2>
            <p className="xs:font-medium text-white/50 whitespace-nowrap mr-1 xs:mr-0">
              $ 27.99
            </p>
            <button className="w-[36px] h-[36px] rounded-full bg-accent hidden 2xs:flex items-center justify-center active:scale-90 active:bg-primary transition-all mr-2">
              <Image src="/phone-icon.png" alt="phone" width={15} height={16} />
            </button>
          </div>
        ))}
    </div>
  );
};
export default MenuTable;
