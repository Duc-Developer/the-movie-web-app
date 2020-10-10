import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, ButtonBase, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

AvatarNavBar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  menuList: PropTypes.array,
};

AvatarNavBar.defaultProps = {
  menuList: [{ name: "", path: "/" }],
};

export default function AvatarNavBar(props) {
  const { src, alt, menuList } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    history.push(path);
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase onClick={handleClick}>
        <Avatar src={src} alt={alt} />
      </ButtonBase>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuList.map((menu, index) => {
          return (
            <MenuItem key={index} onClick={() => handleClose(menu.path)}>
              {menu.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
