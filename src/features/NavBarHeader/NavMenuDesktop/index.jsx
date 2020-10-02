import React from "react";
import PropTypes from "prop-types";
import SimpleMenu from "../../../components/SimpleMenu";

NavMenuDesktop.propTypes = {
  menuList: PropTypes.array,
};

export default function NavMenuDesktop(props) {
  const { menuList } = props;
  return (
    <div className="nav-menu-desktop">
      {menuList &&
        menuList.map((menu) => {
          return (
            <div key={menu.id} className="nav-menu-desktop__item">
              <SimpleMenu
                listItem={menu.listItem}
                menuTitle={menu.name}
                menuTitleColor="rgb(255, 255, 255)"
              />
            </div>
          );
        })}
    </div>
  );
}
