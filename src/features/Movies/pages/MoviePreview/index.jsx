import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { moivesDbConstants as path } from "../../../../constants";
import HeaderPosterPrev from "../../../../components/HeaderPosterPrev";
import Slider from "react-slick";
import PersonSimpleCard from "../../../../components/PersonSimpleCard";

const headerGreadient =
  "linear-gradient(to right, rgba(19.61%, 7.84%, 7.84%, 1.00) 150px, rgba(27.45%, 13.73%, 13.73%, 0.84) 100%)";

function sliderNumberCurrent() {
  let screen = window.screen.width;
  if (screen <= 425) {
    return 2;
  }
  if (screen > 425 && screen <= 1024) {
    return 4;
  }
  if (screen > 1024 && screen <= 1440) {
    return 6;
  }
  if (screen > 1140) {
    return 8;
  }
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: sliderNumberCurrent(),
  slidesToScroll: 1,
  centerPadding: "200px",
  slidesToScroll: sliderNumberCurrent(),
  appendDots: (dots) => (
    <div>
      <ul
        className="movie-preview__slider-dots"
      >
        {dots}
      </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        width: "20px",
        color: "blue",
        border: "1px blue solid",
        borderRadius: "50%",
      }}
    >
      {i + 1}
    </div>
  ),
};

export default function MoviePreview() {
  const params = useParams();
  const [posterImages, setPosterImages] = useState([]);
  const [backDrops, setBackDrops] = useState([]);
  const [details, setDetails] = useState(null);
  const [characters, setCharacters] = useState([]);

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
      let characterApi = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}`
        )
        .then((res) => res.data.cast);
      setPosterImages(posterApi);
      setBackDrops(backDropApi);
      setDetails(detailApi);
      setCharacters(characterApi);
    }
    getData();
  }, [posterImages.length, backDrops.length, characters.length]);

  return (
    <div className="movie-preview">
      <Grid container>
        <HeaderPosterPrev
          details={details}
          backDrop={
            backDrops.length === 0
              ? ""
              : `${path.images}${backDrops[0].file_path}`
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
          <Grid item xs={12}>
            <Typography variant="h5">Top Billed Cast</Typography>

            {characters.length === 0 ? (
              <div>Have not character information here</div>
            ) : (
              <Slider {...settings}>
                {characters.map((character) => {
                  return (
                    <div
                      className="movie-preview__character"
                      key={character.id}
                    >
                      <PersonSimpleCard
                        id={character.id}
                        name={character.name}
                        role={character.character}
                        image={character.profile_path}
                      />
                    </div>
                  );
                })}
              </Slider>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
