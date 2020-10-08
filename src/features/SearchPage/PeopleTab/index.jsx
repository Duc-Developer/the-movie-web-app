import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import PeopleCard from "../../Peoples/components/PeopleCard";
import PropTypes from "prop-types";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

PeopleTab.propTypes = {
  keySearch: PropTypes.string,
};

export default function PeopleTab(props) {
  const { keySearch } = props;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      let peopleApi = await axios
        .get(
          `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.results);
      let totalPageRes = await axios
        .get(
          `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&query=${keySearch}&page=${page}&include_adult=false`
        )
        .then((res) => res.data.total_pages);
      setData(peopleApi);
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
              <PeopleCard
                image={item.profile_path}
                name={item.name}
                knownFor={item.known_for}
                id={item.id}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
