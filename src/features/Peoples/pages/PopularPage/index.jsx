import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import PeopleCard from "../../components/PeopleCard";
import { Pagination } from "@material-ui/lab";

export default function PopularPage() {
  const [peoples, setPeoples] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getData() {
      let peopleData = await axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=${page}`
        )
        .then((res) => res.data.results);
      let dataPages = await axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=${page}`
        )
        .then((res) => res.data.total_pages);
      setPeoples(peopleData);
      setTotalPages(dataPages);
    }
    getData();
  }, [peoples.length, page, totalPages]);

  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>Popular People</h1>
        <Grid spacing={1} container>
          {peoples.length &&
            peoples.map((person) => {
              return (
                <Grid key={person.id} item xs={12} sm={4} md={3}>
                  <PeopleCard
                    id={person.id}
                    image={person.profile_path}
                    name={person.name}
                    knownFor={person.known_for}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <Pagination
              count={totalPages}
              color="secondary"
              onChange={(e, num) => {
                setPage(num);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
