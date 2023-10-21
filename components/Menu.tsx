import MenuCard from "./MenuCard";
import MenuTable from "./MenuTable";

const Menu = () => {
  return (
    <div className="max-container mb-40">
      <div className="flex items-center justify-center">
        <h3 className="text-center text-2xl md:text-5xl py-2 px-6 rounded-md text-primary bg-secondary font-semibold mb-6 md:mb-12">
          Menu
        </h3>
      </div>
      <div className="hidden sm:flex flex-wrap justify-center gap-10 mx-auto px-12">
        {Array(8)
          .fill(1)
          .map((item) => (
            <MenuCard />
          ))}
      </div>

      <div className="block sm:hidden">
        <MenuTable />
      </div>
    </div>
  );
};
export default Menu;
