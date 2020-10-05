import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import MovieCard from "../MovieCard";

SliderSlickMovie.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  slideNumber: PropTypes.number,
  dataType1: PropTypes.string,
  dataType2: PropTypes.string,
  handleType: PropTypes.func,
  switchDisabled: PropTypes.bool,
};

SliderSlickMovie.defaultProps = {
  title: "example",
  dataType1: "tv",
  dataType2: "movie",
  handleType: () => {},
};

export default function SliderSlickMovie(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: props.slideNumber || sliderNumberCurrent(),
    slidesToScroll: 1,
    easing: "ease-in-out",
  };
  const sliderRef = useRef(null);
  const {
    data,
    title,
    dataType1,
    dataType2,
    handleType,
    switchDisabled,
  } = props;
  const [type, setType] = useState(dataType1);

  function sliderNumberCurrent() {
    let screen = window.screen.width;
    if (screen <= 425) {
      return 2;
    }
    if (screen > 425 && screen <= 1024) {
      return 5;
    }
    if (screen > 1024 && screen <= 1440) {
      return 7;
    }
    if (screen > 1140) {
      return 8;
    }
  }

  return (
    <div className="slider-slick-movie">
      <Grid container className="slider-slick-movie__header">
        <Grid
          item
          lg={2}
          sm={3}
          xs={12}
          className="slider-slick-movie__header-left"
        >
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid
          item
          lg={10}
          sm={9}
          xs={12}
          className="slider-slick-movie__header-right"
        >
          <ButtonGroup
            style={{ display: switchDisabled ? "none" : "" }}
            color="primary"
            className="slider-slick-movie__switcher"
          >
            <Button
              onClick={() => {
                setType(dataType1);
                handleType(dataType1, title);
              }}
              variant={dataType1 === type ? "contained" : "outlined"}
            >
              {dataType1.toUpperCase()}
            </Button>
            <Button
              onClick={() => {
                setType(dataType2);
                handleType(dataType2, title);
              }}
              variant={dataType2 === type ? "contained" : "outlined"}
            >
              {dataType2.toUpperCase()}
            </Button>
          </ButtonGroup>
          {data && (
            <ButtonGroup
              variant="text"
              color="primary"
              className="slider-slick-movie__actions"
            >
              <Button
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                Next
              </Button>
            </ButtonGroup>
          )}
        </Grid>
      </Grid>
      <div>
        {!data ? (
          <Typography variant="h6">
            This panel didn't return any results. Try refreshing it!
          </Typography>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <MovieCard
                    name={!item.name ? item.title : item.name}
                    id={item.id}
                    type={type}
                    image={item.poster_path}
                    voteAverage={item.vote_average}
                    firstAirDate={item.first_air_date}
                    originalName={item.original_name}
                  />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}
