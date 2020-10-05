import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { moivesDbConstants as path } from "../../../../constants";
import MoviePosterLibrary from "../../../../components/MoviePosterLibrary";

export default function MoviePreview() {
  const params = useParams();
  const [posterImage, setPosterImage] = useState([]);
  const [backDrops, setBackDrops] = useState([]);

  useEffect(() => {
    async function getData() {
      let posterApi = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&include_image_language=en`
        )
        .then((res) => res.data.posters);
      let backDropApi = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}/images?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&include_image_language=en`
        )
        .then((res) => res.data.backdrops);
      setPosterImage(posterApi);
      setBackDrops(backDropApi);
    }
    getData();
  }, [posterImage.length, backDrops.length]);

  return (
    <div className="movie-preview">
      <Grid container spacing={1}>
        <Grid
          container
          item
          xs={12}
          className="movie-preview__header-poster"
          style={{
            backgroundImage:
              backDrops.length !== 0 &&
              `linear-gradient(to right, rgba(19.61%, 7.84%, 7.84%, 1.00) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%),url(${path.images}${backDrops[0].file_path})`,
          }}
        >
          <Grid item xs={12} md={4}>
            <MoviePosterLibrary
              images={posterImage.map((item) => path.images + item.file_path)}
            />
          </Grid>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <Typography variant="h4">name</Typography>
            </Grid>
            <Grid item xs={12}>
              score and action here
            </Grid>
            <Grid item xs={12}>
              Over view here
            </Grid>
            <Grid item xs={12}>
              director and action here
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
