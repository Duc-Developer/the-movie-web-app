import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "../../../components/MovieCard";
import PropTypes from "prop-types";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

MovieTab.propTypes = {
  keySearch: PropTypes.string,
};

export default function MovieTab(props) {
  const { keySearch } = props;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      let movieApi = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.results);
      let totalPageRes = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.total_pages);
      setData(movieApi);
      setTotalPages(totalPageRes);
    }
    getData();
  }, [page, data.length, totalPages]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Pagination
          color="secondary"
          count={totalPages}
          onChange={(e, num) => {
            setPage(num);
          }}
        />
      </Grid>
      {data &&
        data.map((item) => {
          return (
            <Grid key={item.id} item xs={12} md={2}>
              <MovieCard
                type="movies"
                image={item.poster_path}
                originalName={item.original_title}
                id={item.id}
                voteAverage={item.vote_average}
                name={item.title}
                firstAirDate={item.release_date}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
