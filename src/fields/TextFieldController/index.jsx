import React, { useState } from "react";
import { Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Grid, IconButton, Typography } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";

TextFieldController.propTypes = {
  control: PropTypes.object,
  error: PropTypes.object,
  name: PropTypes.string,
  rules: PropTypes.object,
  icon: PropTypes.node,
  type: PropTypes.string,
  enableAdornment: PropTypes.bool,
};

TextFieldController.defaultProps = {
  enableAdornment: false,
  type: "text",
};

export default function TextFieldController(props) {
  const { control, errors, name, rules, icon, type, enableAdornment } = props;
  const [fieldType, setFieldType] = useState(type);

  const handleClickShowPassword = () => {
    setFieldType("text");
  };

  const handleMouseDownPassword = () => {
    setFieldType("password");
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ onChange }) => (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label={name}
              type={fieldType}
              fullWidth
              onChange={(e) => {
                onChange(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
                endAdornment: enableAdornment && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {fieldType === "text" ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
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
