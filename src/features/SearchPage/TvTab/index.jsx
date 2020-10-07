import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MovieCard from "../../../components/MovieCard";
import PropTypes from "prop-types";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

TvTab.propTypes = {
  keySearch: PropTypes.string,
};

export default function TvTab(props) {
  const { keySearch } = props;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      let tvApi = await axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.results);
      let totalPageRes = await axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.total_pages);
      setData(tvApi);
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
                type="tv"
                image={item.poster_path}
                originalName={item.original_name}
                id={item.id}
                voteAverage={item.vote_average}
                name={item.name}
                firstAirDate={item.first_air_date}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
