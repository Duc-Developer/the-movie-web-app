import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import logo from "../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import NavMenuDesktop from "./NavMenuDesktop";
import NavMenuMobile from "./NavMenuMobile";

const movieDropdown = {
  id: "movie-dropdown-id",
  name: "Movies",
  listItem: [
    { name: "Popular", path: "/movies/popular" },
    { name: "Now Playing", path: "/movies/now-playing" },
    { name: "Upcoming", path: "/movies/upcoming" },
    { name: "Top Rated", path: "/movies/top-rated" },
  ],
};

const tvShowsDropdown = {
  id: "tv-shows-dropdown-id",
  name: "TV Shows",
  listItem: [
    { name: "Popular", path: "/tv-shows/popular" },
    { name: "Airing Today", path: "/tv-shows/airing-today" },
    { name: "On TV", path: "/tv-shows/on-tv" },
    { name: "Top Rated", path: "/tv-shows/top-rated" },
  ],
};

const peopleDropdown = {
  id: "people-dropdown-id",
  name: "People",
  listItem: [{ name: "Popular People", path: "/people/popular-people" }],
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
              <div>
                <Typography>
                  Login
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Container>
    </div>
  );
}
