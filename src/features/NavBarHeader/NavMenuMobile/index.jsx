import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import TheatersIcon from "@material-ui/icons/Theaters";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MoreIcon from "@material-ui/icons/More";
import ErrorIcon from "@material-ui/icons/Error";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import logo from "../../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import ButtonBase from "@material-ui/core/ButtonBase";

NavMenuMobile.propTypes = {
  menuList: PropTypes.array,
};

const drawerWidth = "calc(80vw)";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
    // flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NavMenuMobile(props) {
  const classes = useStyles();
  const { menuList } = props;
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  function chooseIconMenu(menuId) {
    switch (menuId) {
      case "movie-dropdown-id":
        return <TheatersIcon />;
      case "tv-shows-dropdown-id":
        return <LiveTvIcon />;
      case "people-dropdown-id":
        return <EmojiPeopleIcon />;
      case "more-dropdown-id":
        return <MoreIcon />;
      default:
        return <ErrorIcon />;
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ButtonBase
            onClick={() => {
              history.push("/");
              setOpen(false);
            }}
          >
            <img src={logo} width="180px" alt="logo-mobile-app" />
          </ButtonBase>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuList &&
            menuList.map((menu) => (
              <div key={menu.id}>
                <ListItem
                  onClick={() => {
                    setOpenDropdown(menu.id);
                  }}
                  button
                >
                  <ListItemIcon>{chooseIconMenu(menu.id)}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                  {openDropdown === menu.id ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  in={openDropdown === menu.id}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {menu.listItem.map((item, index) => {
                      return (
                        <div key={index}>
                          <ListItem
                            button
                            onClick={() => {
                              history.push(item.path);
                              setOpen(false);
                            }}
                            className={classes.nested}
                          >
                            <ListItemText secondary={item.name} />
                          </ListItem>
                        </div>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
