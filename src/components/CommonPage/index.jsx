import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import MovieCard from "../MovieCard";
import { Pagination } from "@material-ui/lab";
import Slider from "react-slick";
import sliderImage001 from "../../assets/images/e4c6409d1a3621b57cfe404056e5faa3.gif";
import sliderImage002 from "../../assets/images/dc5b310af8ced207029634c08a538cae.gif";
import sliderImage003 from "../../assets/images/023eb1965f0623f9fc3b975fa8dba6bb.gif";
import sliderImage004 from "../../assets/images/2cae3488025585.5dca0b4379d96.gif";
import sliderImage005 from "../../assets/images/3JGwuPUY7BB_.gif";
import sliderImage006 from "../../assets/images/2d355e9108415af382c18013fd626e8e.gif";

CommonPage.propTypes = {
  listData: PropTypes.array,
  handlePageChange: PropTypes.func,
  totalPages: PropTypes.number,
  type: PropTypes.string,
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  easing: "ease-in-out",
  speed: 2000,
};

export default function CommonPage(props) {
  const { listData, handlePageChange, totalPages, type } = props;
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={3}>
          <Slider {...settings}>
            {[sliderImage001, sliderImage002, sliderImage003].map(
              (src, index) => {
                return <img src={src} alt={src} key={index} />;
              }
            )}
          </Slider>
          <Slider {...settings}>
            {[sliderImage004, sliderImage005, sliderImage006].map(
              (src, index) => {
                return <img src={src} alt={src} key={index} />;
              }
            )}
          </Slider>
        </Grid>
        <Grid container item xs={12} sm={12} lg={9}>
          {listData &&
            listData.map((movie) => {
              return (
                <Grid item key={movie.id} xs={12} sm={4} md={3}>
                  <MovieCard
                    id={movie.id}
                    image={movie.poster_path}
                    voteAverage={movie.vote_average}
                    name={movie.name || movie.title}
                    firstAirDate={movie.first_air_date || movie.release_date}
                    originalName={movie.original_name || movie.original_title}
                    width="12em"
                    height="25em"
                    type={type}
                  />
                </Grid>
              );
            })}
          <Grid
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            xs={12}
            item
          >
            <Pagination
              count={totalPages}
              color="secondary"
              onChange={(event, page) => {
                handlePageChange(page);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
