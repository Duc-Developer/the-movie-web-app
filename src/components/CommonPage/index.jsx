import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import MovieCard from "../MovieCard";
import { Pagination } from "@material-ui/lab";

CommonPage.propTypes = {
  listData: PropTypes.array,
  handlePageChange: PropTypes.func,
  totalPages: PropTypes.number,
};

export default function CommonPage(props) {
  const { listData, handlePageChange, totalPages } = props;
  return (
    <div>
      <Grid container>
        <Grid item sm={12} lg={3}>
          this products filter here
        </Grid>
        <Grid container item sm={12} lg={9}>
          {listData &&
            listData.map((movie) => {
              return (
                <Grid item key={movie.id} xs={12} lg={3}>
                  <MovieCard
                    id={movie.id}
                    image={movie.poster_path}
                    voteAverage={movie.vote_average}
                    name={movie.name || movie.title}
                    firstAirDate={movie.first_air_date || movie.release_date}
                    originalName={movie.original_name || movie.original_title}
                    width="12em"
                    height="25em"
                  />
                </Grid>
              );
            })}
          <Grid
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            xs={12}
            item
          >
            <Pagination
              count={totalPages}
              color="secondary"
              onChange={(event, page) => {
                handlePageChange(page);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
