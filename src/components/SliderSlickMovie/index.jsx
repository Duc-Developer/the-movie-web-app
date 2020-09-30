import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import Slider from "react-slick";
import MovieCard from "../MovieCard";

SliderSlickMovie.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  slideNumber: PropTypes.number,
  dataType1: PropTypes.string,
  dataType2: PropTypes.string,
  handleType: PropTypes.func,
};

SliderSlickMovie.defaultProps = {
  slideNumber: 7,
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
    slidesToShow: props.slideNumber,
    slidesToScroll: 1,
    easing: "ease-in-out",
  };

  const sliderRef = useRef(null);
  const { data, title, dataType1, dataType2, handleType } = props;
  const [type, setType] = useState(dataType1);
  return (
    <div className="slider-slick-movie">
      <div className="slider-slick-movie__header">
        <Typography variant="h5">{title}</Typography>
        <div className="slider-slick-movie__switch">
          <ButtonGroup color="primary">
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
        </div>
        {data && (
          <ButtonGroup variant="text" color="primary">
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
      </div>
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
                    name={item.name}
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
