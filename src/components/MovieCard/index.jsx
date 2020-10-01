import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@material-ui/core";
import { moivesDbConstants as path } from "../../constants";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import StarIcon from "@material-ui/icons/Star";

MovieCard.propType = {
  type: PropTypes.oneOf(["tv", "movie"]),
  image: PropTypes.string,
  originalName: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  voteAverage: PropTypes.number,
  name: PropTypes.string,
  firstAirDate: PropTypes.string,
};

MovieCard.defaultProps = {
  type: "",
  image: "/dzOxNbbz1liFzHU1IPvdgUR647b.jpg",
  originalName: "something was wrong",
  id: 111111111,
  voteAverage: 0,
  name: "something was wrong",
  firstAirDate: "2019-07-25",
};

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textPrimary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default function MovieCard(props) {
  const {
    id,
    type,
    image,
    voteAverage,
    name,
    firstAirDate,
    originalName,
  } = props;
  const history = useHistory();
  const [active, setActive] = useState(false);
  return (
    <div className="movie-card">
      <Card
        style={{
          width: props.width,
          height: props.height,
        }}
        className="movie-card__wrapper"
      >
        <div className="movie-card__header">
          <IconButton
            onClick={() => {
              setActive(!active);
            }}
            onBlur={() => {
              setActive(false);
            }}
            aria-label="settings"
          >
            <MoreHorizIcon className="movie-card__header-icon" />
          </IconButton>
        </div>
        <CardMedia
          className="movie-card__media"
          image={path.images + image}
          title={originalName}
          onClick={() => {
            history.push(`${type}/${id}`);
          }}
        />
        <CardContent className="movie-card__content">
          <div className="movie-card__vote-average">
            <CircularProgressWithLabel value={voteAverage * 10} />
          </div>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography>{firstAirDate}</Typography>
        </CardContent>
      </Card>
      {active && (
        <div className="movie-card__little-menu">
          <ButtonBase>
            <ListIcon />
            <span> Add To List</span>
          </ButtonBase>
          <ButtonBase>
            <FavoriteIcon />
            <span> Favorite</span>
          </ButtonBase>
          <ButtonBase className="movie-card__little-menu-base">
            <BookmarkIcon />
            <span> Watchlist</span>
          </ButtonBase>
          <ButtonBase>
            <StarIcon />
            <span> Your rating</span>
          </ButtonBase>
        </div>
      )}
    </div>
  );
}
