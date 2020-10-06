import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { moivesDbConstants as path } from "../../../../constants";
import HeaderPosterPrev from "../../../../components/HeaderPosterPrev";

const headerGreadient =
  "linear-gradient(to right, rgba(19.61%, 7.84%, 7.84%, 1.00) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%)";

export default function MoviePreview() {
  const params = useParams();
  const [posterImages, setPosterImages] = useState([]);
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
      setPosterImages(posterApi);
      setBackDrops(backDropApi);
      setDetails(detailApi);
    }
    getData();
  }, [posterImages.length, backDrops.length]);

  return (
    <div className="movie-preview">
      <Grid container>
        <HeaderPosterPrev
          details={details}
          backDrop={
            backDrops.length && `${path.images}${backDrops[0].file_path}`
          }
          backDropGradient={headerGreadient}
          posterImages={posterImages.map(
            (item) => path.images + item.file_path
          )}
        />
        <Grid
          container
          item
          spacing={2}
          xs={12}
          className="movie-preview__body-page"
        >
          <Grid item xs={12} md={8}>
            action credit and comment here
          </Grid>
          <Grid item xs={12} md={4}>
            score information here
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
