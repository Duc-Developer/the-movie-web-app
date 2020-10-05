import React from "react";
import PropTypes from "prop-types";
import { Box, CircularProgress, Typography } from "@material-ui/core";

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
};

CircularProgressWithLabel.defaultProps = {
    value: 0,
    size: 2
}

function CircularProgressWithLabel(props) {
  return (
    <Box
      className="circular-progress-with-label"
      position="relative"
      display="inline-flex"
      style={{ width: `${props.size}em` }}
    >
      <CircularProgress
        style={{ width: `${props.size}em`, height: `${props.size}em` }}
        variant="static"
        {...props}
      />
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
          style={{ fontSize: `${0.4 * props.size}em` }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default CircularProgressWithLabel;
