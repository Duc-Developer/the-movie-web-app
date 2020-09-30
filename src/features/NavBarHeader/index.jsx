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
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import TableList from "../../components/TableList";
import PropTypes from "prop-types";

const movieDropdown = [
  { title: "Popular", link: "/movies/popular" },
  { title: "Now Playing", link: "/moives/now-playing" },
  { title: "Upcoming", link: "/moives/upcoming" },
  { title: "Top Rated", link: "/moives/top-rated" },
];

const tvShowsDropdown = [
  { title: "Popular", link: "/tv-shows/popular" },
  { title: "Airing Today", link: "/tv-shows/airing-today" },
  { title: "On TV", link: "/tv-shows/on-tv" },
  { title: "Top Rated", link: "/tv-shows/top-rated" },
];

const peopleDropdown = [
  { title: "Popular People", link: "/people/popular-people" },
];

const moreDropdown = [
  { title: "Discussions", link: "/more/discussions" },
  { title: "Leader Board", link: "/more/leader-board" },
  { title: "Support", link: "/more/support" },
  { title: "Api", link: "/more/api" },
];

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
  const [active, setActive] = useState(false);
  return (
    <div className="navbar-header">
      <Container>
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <IconButton className="navbar-header__logo">
                <img src={logo} alt="logo-app" />
              </IconButton>
              <div className="navbar-header__menu">
                <div
                  onMouseMove={() => {
                    setActive("movieDropdown");
                  }}
                  onMouseLeave={() => {
                    setActive(false);
                  }}
                  className="navbar-header__menu-item"
                >
                  <Typography className="navbar-header__menu-item-title">
                    Movies
                  </Typography>
                  {active === "movieDropdown" && (
                    <div className="navbar-header__menu-item--dropdown">
                      <TableList list={movieDropdown} />
                    </div>
                  )}
                </div>
                <div
                  onMouseMove={() => {
                    setActive("tvShowsDropdown");
                  }}
                  onMouseLeave={() => {
                    setActive(false);
                  }}
                  className="navbar-header__menu-item"
                >
                  <Typography className="navbar-header__menu-item-title">
                    TVShows
                  </Typography>
                  {active === "tvShowsDropdown" && (
                    <div className="navbar-header__menu-item--dropdown">
                      <TableList list={tvShowsDropdown} />
                    </div>
                  )}
                </div>
                <div
                  onMouseMove={() => {
                    setActive("peopleDropdown");
                  }}
                  onMouseLeave={() => {
                    setActive(false);
                  }}
                  className="navbar-header__menu-item"
                >
                  <Typography className="navbar-header__menu-item-title">
                    People
                  </Typography>
                  {active === "peopleDropdown" && (
                    <div className="navbar-header__menu-item--dropdown">
                      <TableList list={peopleDropdown} />
                    </div>
                  )}
                </div>
                <div
                  onMouseMove={() => {
                    setActive("moreDropdown");
                  }}
                  onMouseLeave={() => {
                    setActive(false);
                  }}
                  className="navbar-header__menu-item"
                >
                  <Typography className="navbar-header__menu-item-title">
                    More
                  </Typography>
                  {active === "moreDropdown" && (
                    <div className="navbar-header__menu-item--dropdown">
                      <TableList list={moreDropdown} />
                    </div>
                  )}
                </div>
              </div>
              <Typography>Login</Typography>
              <IconButton>
                <SearchIcon
                  fontSize="large"
                  className="navbar-header__search-icon"
                />
              </IconButton>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Container>
    </div>
  );
}
