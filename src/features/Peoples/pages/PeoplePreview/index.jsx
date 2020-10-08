import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import PersonInformation from "../../components/PersonInformation";
import { useParams } from "react-router-dom";
import axios from "axios";
import PersonStory from "../../components/PersonStory";

export default function PeoplePreview(props) {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [personTranslations, setPersonTranslations] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [tvCast, setTVCast] = useState([]);
  useEffect(() => {
    async function getData() {
      let detailApi = await axios
        .get(
          `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi`
        )
        .then((res) => res.data);
      let translationApi = await axios
        .get(
          `https://api.themoviedb.org/3/person/${params.id}/translations?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}`
        )
        .then((res) => res.data.translations);
      let movieCastApi = await axios
        .get(
          `https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi`
        )
        .then((res) => res.data.cast);
      let tvCastApi = await axios
        .get(
          `https://api.themoviedb.org/3/person/${params.id}/tv_credits?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi`
        )
        .then((res) => res.data.cast);
      setDetails(detailApi);
      setPersonTranslations(translationApi);
      setMovieCast(movieCastApi);
      setTVCast(tvCastApi);
    }
    getData();
  }, [personTranslations.length, params.id, movieCast.length, tvCast.length]);

  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            {!details ? (
              <div>Loading...</div>
            ) : (
              <PersonInformation details={details} />
            )}
          </Grid>
          <Grid item xs={12} md={9}>
            {!details || !movieCast.length || !tvCast.length ? (
              <div>Loading...</div>
            ) : (
              <PersonStory
                name={details.name}
                translations={personTranslations}
                movieCast={movieCast}
                tvCast={tvCast}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
