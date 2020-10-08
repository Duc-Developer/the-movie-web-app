import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import TabBarController from "../../components/TabBarController";
import MovieTab from "./MovieTab";
import TvTab from "./TvTab";
import PeopleTab from "./PeopleTab";

export default function SearchPage() {
  const location = useLocation();
  const keySearch = location.search.slice(7);

  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <Typography variant="h4" component="h1">
          Movies and TV Shows:
        </Typography>
        <TabBarController
          tabChildren={[
            { name: "Movie", node: <MovieTab keySearch={keySearch} /> },
            { name: "TV Show", node: <TvTab keySearch={keySearch} /> },
            {name: "Peoples", node: <PeopleTab keySearch={keySearch} />}
          ]}
        />
      </Container>
    </div>
  );
}
