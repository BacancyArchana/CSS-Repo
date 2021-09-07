import React from "react";

const Header = ({ menuList, activeKey, changeKey }) => {
  return (
    <div className="flex p-2 bg-gray-800 text-white">
      {menuList.map((menu) => (
        <div
          key={menu.key}
          className={`p-3 hover:bg-gray-600 ${
            menu.key === activeKey ? "bg-gray-500" : ""
          }`}
          onClick={() => changeKey(menu.key)}
        >
          {menu.title}
        </div>
      ))}
    </div>
  );
};

export default Header;
