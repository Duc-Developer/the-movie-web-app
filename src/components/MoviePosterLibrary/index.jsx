import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

MoviePosterLibrary.propTypes = {
  images: PropTypes.array,
};

export default function MoviePosterLibrary(props) {
  const { images } = props;
  const [preview, setPreview] = useState(null);
  
  useEffect(() => {
    
  },[preview])

  return (
    <div className="movie-poster-library">
      <Grid container spacing={1}>
        <Grid item xs={8} className="movie-poster-library__preview">
          <img src={!preview ? images[0] : preview} alt="main-image-preview" />
        </Grid>
        <Grid className="movie-poster-library__list-images" container item xs={4}>
          {images &&
            images.map((image, index) => {
              return (
                 <Grid item key={index} xs={12}>
                    <img 
                  src={image} 
                  alt={`movie-image-${index}`} 
                  onClick={() => {
                    setPreview(image);
                  }}
                  />
                 </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
