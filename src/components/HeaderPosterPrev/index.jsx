import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import CircularProgressWithLabel from "../CircularProgressWithLabel";
import MoviePosterLibrary from "../MoviePosterLibrary";

HeaderPosterPrev.propTypes = {
  details: PropTypes.object,
  backDrop: PropTypes.string,
  posterImages: PropTypes.array,
  backDropGradient: PropTypes.string,
};

HeaderPosterPrev.defaultProps = {
  backDropGradient:
    "linear-gradient(to right, rgba(19.61%, 7.84%, 7.84%, 1.00) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%)",
  backDrop: "https://picsum.photos/600/400",
  posterImages: [],
  details: {
    title: "empty",
    original_language: "empty",
    release_date: "empty",
    runtime: "empty",
    genres: [],
    vote_average: 0,
    homepage: "https://example",
    production_companies: [],
    overview: "empty",
  },
};

export default function HeaderPosterPrev(props) {
  const { details, backDrop, posterImages, backDropGradient } = props;
  console.log(details);
  return (
    <div className="header-poster-prev">
      <Grid
        container
        item
        spacing={2}
        xs={12}
        className="header-poster-prev__wrap"
        style={{
          backgroundImage: `${backDropGradient},url(${backDrop})`,
        }}
      >
        <Grid item xs={12} md={4}>
          <MoviePosterLibrary images={posterImages} />
        </Grid>
        <Grid container item xs={12} md={8}>
          {!details ? (
            <div>Loading...</div>
          ) : (
            <>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  className="header-poster-prev__text--white"
                >
                  {details.title || details.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="header-poster-prev__text--white"
                >
                  {(details.release_date || details.first_air_date) +
                    " - " +
                    (details.runtime || details.episode_run_time[0]) +
                    " minutes"}
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="header-poster-prev__text--white"
                >
                  {details.genres.map((text) => text.name + ", ")}
                </Typography>
              </Grid>
              <Grid container item xs={12} alignItems="center" direction="row">
                <div>
                  <CircularProgressWithLabel
                    value={details.vote_average * 10}
                    size={3.5}
                  />
                </div>
                <Typography
                  variant="h6"
                  className="header-poster-prev__text--white"
                >
                  User Score
                </Typography>
              </Grid>
              <Grid alignItems="center" direction="row" container item xs={12}>
                <Typography
                  variant="h6"
                  className="header-poster-prev__text--white"
                >
                  HomePage:{" "}
                </Typography>
                <Typography variant="h6" component="i" color="primary">
                  {details.homepage}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  className="header-poster-prev__text--white"
                >
                  Over View:
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  className="header-poster-prev__text--white"
                >
                  {details.overview}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  className="header-poster-prev__text--white"
                >
                  Companies:
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="header-poster-prev__text--white"
                  component="p"
                >
                  {details.production_companies.map((text) => {
                    return text.name + ", ";
                  })}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
