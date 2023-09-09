import { Link } from "react-router-dom";
import { MenuList } from "../MenuList/MenuList";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const MenuContainer = () => {
  return (
    <>
      <div className="flex flex-col text-white bg-[#15212D] w-60 p-3">
        <div className="flex items-center font-bold gap-2 px-1 py-3"></div>
        <div className="flex-1">
          {MenuList.map((menu) => (
            <div key={menu.id} className="flex flex-col gap-2 mb-5">
              <span className="text-[10px] font-light text-[#ddd] uppercase">
                {menu.title}
              </span>
              {menu.listItems.map((listItem) => (
                <Link
                  key={listItem.id}
                  to={listItem.url}
                  className="flex items-center  gap-3 p-3 rounded-sm hover:bg-[#dddddd1d] hover:text-white"
                >
                  {listItem.icon && React.createElement(listItem.icon)}
                  <span>{listItem.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="rounded-sm btn btn-block btn-outline btn-accent ">
            Logout <LogoutIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
