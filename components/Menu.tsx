import { Foods } from "@/constants";
import MenuCard from "./MenuCard";
import MenuTable from "./MenuTable";
import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="max-container mb-40 scroll-mt-10">
      <div className="flex items-center justify-center">
        <h3 className="text-center text-2xl md:text-5xl py-2 px-6 rounded-md text-primary bg-secondary font-semibold mb-6 md:mb-12">
          Menu
        </h3>
      </div>
      <div className="hidden sm:flex flex-wrap justify-center gap-10 mx-auto px-12">
        {Foods.map((item, index) => (
          <React.Fragment key={index}>
            <MenuCard food={item} />
          </React.Fragment>
        ))}
      </div>

      <div className="block sm:hidden">
        <MenuTable />
      </div>
    </div>
  );
};
export default Menu;
