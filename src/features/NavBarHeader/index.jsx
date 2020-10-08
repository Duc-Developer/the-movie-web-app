import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  useScrollTrigger,
  Slide,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import logo from "../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";
import { movieRoutes, tvRoutes } from "../../constants";
import { userRoutes } from "../../constants";

const movieDropdown = {
  id: "movie-dropdown-id",
  name: "Movies",
  listItem: [
    {
      name: "Popular",
      path: movieRoutes.path + movieRoutes.children.popular.path,
    },
    {
      name: "Now Playing",
      path: movieRoutes.path + movieRoutes.children.now_playing.path,
    },
    {
      name: "Upcoming",
      path: movieRoutes.path + movieRoutes.children.upcoming.path,
    },
    {
      name: "Top Rated",
      path: movieRoutes.path + movieRoutes.children.top_rated.path,
    },
  ],
};

const tvShowsDropdown = {
  id: "tv-dropdown-id",
  name: "TV Shows",
  listItem: [
    { name: "Popular", path: tvRoutes.path + tvRoutes.children.popular.path },
    {
      name: "Airing Today",
      path: tvRoutes.path + tvRoutes.children.airing_today.path,
    },
    { name: "On TV", path: tvRoutes.path + tvRoutes.children.on_tv.path },
    {
      name: "Top Rated",
      path: tvRoutes.path + tvRoutes.children.top_rated.path,
    },
  ],
};

const peopleDropdown = {
  id: "people-dropdown-id",
  name: "People",
  listItem: [{ name: "Popular People", path: "/peoples/popular-peoples" }],
};

const moreDropdown = {
  id: "more-dropdown-id",
  name: "More",
  listItem: [
    { name: "Discussions", path: "/more/discussions" },
    { name: "Leader Board", path: "/more/leader-board" },
    { name: "Support", path: "/more/support" },
    { name: "Api", path: "/more/api" },
  ],
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavBarHeader(props) {
  const history = useHistory();

  const navBarMobile = () => {
    return (
      <div className="navbar-header__menu--mobile-screen">
        <IconButton>
          <ReorderIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <div className="navbar-header">
      <Container>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <IconButton
                onClick={() => {
                  history.push("/");
                }}
                className="navbar-header__logo"
              >
                <img src={logo} alt="logo-app" />
              </IconButton>
              <div className="navbar-header__menu--desktop-screen">
                <NavMenuDesktop
                  menuList={[
                    movieDropdown,
                    tvShowsDropdown,
                    peopleDropdown,
                    moreDropdown,
                  ]}
                />
              </div>
              <div className="navbar-header__menu--mobile-screen">
                <NavMenuMobile
                  menuList={[
                    movieDropdown,
                    tvShowsDropdown,
                    peopleDropdown,
                    moreDropdown,
                  ]}
                />
              </div>
              <div className="navbar-header__desktop-authecation">
                <ButtonGroup variant="text" color="inherit">
                  <Button
                    onClick={() => {
                      history.push(
                        userRoutes.path + userRoutes.children.login.path
                      );
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      history.push(
                        userRoutes.path + userRoutes.children.register.path
                      );
                    }}
                  >
                    Register
                  </Button>
                </ButtonGroup>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Container>
    </div>
  );
}
