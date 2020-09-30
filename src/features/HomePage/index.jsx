import { Button, InputBase } from "@material-ui/core";
import React from "react";
import MovieCard from "../../components/MovieCard";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__header">
        <div className="home-page__header-content">
          <h1>Welcome.</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <div className="home-page__header-content-search-bar">
            <InputBase
              className="home-page__header-content-input"
              placeholder="Search for movies, TV shows, person..."
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>
      <div className="home-page__body">
          <MovieCard />
      </div>
    </div>
  );
}
