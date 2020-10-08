import React from "react";
import PropTypes from "prop-types";
import {
  ButtonBase,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SliderSlickMovie from "../../../../components/SliderSlickMovie";

PersonStory.propTypes = {
  translations: PropTypes.array,
  name: PropTypes.string,
  movieCast: PropTypes.array,
  tvCast: PropTypes.array,
};

export default function PersonStory(props) {
  const [languageCurrent, setLanguage] = React.useState("en");
  const { translations, name, movieCast, tvCast } = props;
  const [cast, setCast] = React.useState(tvCast);
  const [showAll, setShowAll] = React.useState(false);
  const biographys = translations.filter(
    (item) => item.english_name === languageCurrent
  );

  function sliderNumberCurrent() {
    let screen = window.screen.width;
    if (screen <= 425) {
      return 1;
    }
    if (screen > 425 && screen <= 1024) {
      return 3;
    }
    if (screen > 1024 && screen <= 1440) {
      return 5;
    }
    if (screen > 1140) {
      return 6;
    }
  }

  function handleType(type, title) {
    // console.log(type, title)
    if (type === "movie") {
      setCast(movieCast);
      return;
    }
    if (type === "tv") {
      setCast(tvCast);
      return;
    }
  }

  return (
    <div className="person-story">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={9}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            select
            value={languageCurrent}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            label="Language"
            helperText="Please select your language"
          >
            {translations.map((option, index) => {
              return (
                <MenuItem key={index} value={option.english_name}>
                  {option.name}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
        <Grid className="person-story__biography" item xs={12}>
          <Typography variant="h6">Biography</Typography>
          <Typography
            className={clsx({
              "person-story__biography--text-hidden": !showAll,
              "person-story__biography--text-show-all": showAll,
            })}
            variant="body2"
            gutterBottom
          >
            {biographys.length && biographys[0].data.biography}
          </Typography>
          <ButtonBase
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ButtonBase>
        </Grid>
        <Grid item xs={12}>
          {cast && (
            <SliderSlickMovie
              data={cast}
              title="Known For:"
              slideNumber={sliderNumberCurrent()}
              // switchDisabled
              handleType={(type, title) => {
                handleType(type, title);
              }}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
