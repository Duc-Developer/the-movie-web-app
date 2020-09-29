import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import TableList from "../../components/TableList";

const movieDropdown = [
  { title: "Popular", link: "" },
  { title: "Now Playing", link: "" },
  { title: "Upcoming", link: "" },
  { title: "Top Rated", link: "" },
];

const tvShowsDropdown = [
  { title: "Popular", link: "" },
  { title: "Airing Today", link: "" },
  { title: "On TV", link: "" },
  { title: "Top Rated", link: "" },
];

const peopleDropdown = [{ title: "Popular People", link: "" }];

const moreDropdown = [
  { title: "Discussions", link: "" },
  { title: "Leader Board", link: "" },
  { title: "Support", link: "" },
  { title: "Api", link: "" },
];

export default function NavBarHeader() {
  const [active, setActive] = useState(false);
  return (
    <div className="navbar-header">
      <Container>
        <AppBar position="fixed">
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
                {active == "movieDropdown" && (
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
      </Container>
    </div>
  );
}
