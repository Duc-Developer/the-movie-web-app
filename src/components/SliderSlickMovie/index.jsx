import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import MovieCard from "../MovieCard";

SliderSlickMovie.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  slideNumber: PropTypes.number,
  switch1: PropTypes.string,
  switch2: PropTypes.string,
  handleType: PropTypes.func,
  switchDisabled: PropTypes.bool,
};

SliderSlickMovie.defaultProps = {
  title: "example",
  switch1: "tv", // today
  switch2: "movies", // this week
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
  const { data, title, switch1, switch2, handleType, switchDisabled } = props;
  const [type, setType] = useState(switch1);

  // chọn giá trị số movie poster hiển thị trên 1 slider ứng với mỗi kích thước màn hình
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

  function handleMediaType(media) {
    
    if (!media) {
      // nếu media không tồn tại type của MovieCard được chọn theo giá trị của switch hiện tại
      return type;
    } else {
      // nếu media tồn tại sẽ có 1 trong 2 giá trị tv hoặc movie
      // do ta định nghĩa type truyền vào MovieCard gồm tv || movies nên ta sẽ trả về kiểu dữ liệu cho đúng
      switch(media) {
        case "movie":
          return "movies";
        case "tv":
          return "tv";
        default:
          return media;
      }
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
                setType(switch1);
                handleType(switch1, title);
              }}
              variant={switch1 === type ? "contained" : "outlined"}
            >
              {switch1.toUpperCase()}
            </Button>
            <Button
              onClick={() => {
                setType(switch2);
                handleType(switch2, title);
              }}
              variant={switch2 === type ? "contained" : "outlined"}
            >
              {switch2.toUpperCase()}
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
                    type={handleMediaType(item.media_type)}
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
