import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

TextFieldController.propTypes = {
  control: PropTypes.object,
  error: PropTypes.object,
  name: PropTypes.string,
  rules: PropTypes.object,
  icon: PropTypes.node,
};

export default function TextFieldController(props) {
  const { control, errors, name, rules, icon } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ onChange }) => (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="User"
              onChange={(e) => {
                onChange(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            {errors[name] && (
              <Typography color="error" variant="caption" component="i">
                {errors[name].message}
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
    />
  );
}
