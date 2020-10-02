import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

SimpleMenu.propTypes = {
  listItem: PropTypes.array,
  menuTitle: PropTypes.string,
  menuTitleColor: PropTypes.string,
};

SimpleMenu.defaultProps = {
  listItem: [{ name: "name is required", path: "path-is-required" }],
  menuTitle: "title is required",
  menuTitleColor: "#aaaaaa",
};

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { listItem, menuTitle, menuTitleColor } = props;
  const history = useHistory();

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseLeave={handleClose}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseMove={handleHover}
      >
        <span style={{ color: menuTitleColor }}>{menuTitle}</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div onMouseLeave={handleClose}>
          {listItem &&
            listItem.map((item, index) => {
              return (
                <div key={index}>
                  <MenuItem
                    onClick={() => {
                      history.push(item.path);
                    }}
                  >
                    {item.name}
                  </MenuItem>
                </div>
              );
            })}
        </div>
      </Menu>
    </div>
  );
}
