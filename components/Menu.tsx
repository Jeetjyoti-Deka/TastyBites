import { Foods } from "@/constants";
import MenuCard from "./MenuCard";
import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="max-container mb-40 scroll-mt-10">
      <div className="flex items-center justify-center mb-10 md:mb-16">
        <h3 className="text-center text-2xl md:text-5xl py-2 px-6 rounded-md text-primary bg-secondary font-semibold ">
          Menu
        </h3>
      </div>
      <div className="hide-scrollbar overflow-x-scroll flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-10 sm:mx-auto px-4 sm:px-12">
        {Foods.map((item, index) => (
          <React.Fragment key={index}>
            <MenuCard food={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Menu;
