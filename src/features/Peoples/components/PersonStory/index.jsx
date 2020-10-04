import React from "react";
import PropTypes from "prop-types";
import { Grid, MenuItem, TextField, Typography } from "@material-ui/core";

PersonStory.propTypes = {
  translations: PropTypes.array,
  name: PropTypes.string,
};

export default function PersonStory(props) {
  const [languageCurrent, setLanguage] = React.useState("en");
  const { translations, name } = props;
  const biographys = translations.filter(
    (item) => item.english_name === languageCurrent
  );

  return (
    <div>
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
        <Grid item xs={12}>
          <Typography variant="h6">Biography</Typography>
          <Typography variant="body2" gutterBottom>
            {biographys.length && biographys[0].data.biography}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
