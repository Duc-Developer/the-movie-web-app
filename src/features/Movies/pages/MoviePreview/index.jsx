import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { moivesDbConstants as path } from "../../../../constants";
import MoviePosterLibrary from "../../../../components/MoviePosterLibrary";
import CircularProgressWithLabel from "../../../../components/CircularProgressWithLabel";

export default function MoviePreview() {
  const params = useParams();
  const [posterImage, setPosterImage] = useState([]);
  const [backDrops, setBackDrops] = useState([]);
  const [details, setDetails] = useState(null);

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
      let detailApi = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi`
        )
        .then((res) => res.data);
      setPosterImage(posterApi);
      setBackDrops(backDropApi);
      setDetails(detailApi);
    }
    getData();
  }, [posterImage.length, backDrops.length]);

  return (
    <div className="movie-preview">
      <Grid container>
        <Grid
          container
          item
          spacing={2}
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
            {!details ? (
              <div>Loading...</div>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    className="movie-preview__header-text"
                  >
                    {details.title || details.original_language}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="movie-preview__header-text"
                  >
                    {details.release_date +
                      " - " +
                      details.runtime +
                      " minutes"}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="movie-preview__header-text"
                  >
                    {details.genres.map((text) => text.name + ", ")}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  alignItems="center"
                  direction="row"
                >
                  <div>
                    <CircularProgressWithLabel
                      value={details.vote_average * 10}
                      size={3.5}
                    />
                  </div>
                  <Typography
                    variant="h6"
                    className="movie-preview__header-text"
                  >
                    User Score
                  </Typography>
                </Grid>
                <Grid
                  alignItems="center"
                  direction="row"
                  container
                  item
                  xs={12}
                >
                  <Typography
                    variant="h6"
                    className="movie-preview__header-text"
                  >
                    HomePage:{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="i"
                    color="primary"
                  >
                    {details.homepage}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    className="movie-preview__header-text"
                  >
                    Over View:
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="movie-preview__header-text"
                  >
                    {details.overview}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" className="movie-preview__header-text">
                    Companies:
                  </Typography>
                  <Typography variant="subtitle1" className="movie-preview__header-text" component="p">
                    {details.production_companies.map(text => {
                      return text.name + ", "
                    })}
                  </Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
