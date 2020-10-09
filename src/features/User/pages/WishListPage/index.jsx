import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { database } from "../../../../firebase";
import MovieCard from "../../../../components/MovieCard";

function convertArray(object) {
  let list = [];
  for (var key in object) {
    list.push(object[key]);
  }
  return list;
}

export default function WishListPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    async function getData() {
      let wishlistApi = await database
        .ref("/users/" + userId)
        .once("value")
        .then((snapshot) => snapshot.val()?.wishList);
      setWishlist(convertArray(wishlistApi));
    }
    getData();
  }, [wishlist.length]);

  return (
    <div className="wishlist-page">
      <Container>
        <Typography variant="h5" component="h1">
          WISH LIST:
        </Typography>
        <Grid container spacing={2}>
          {!wishlist.length ? (
            <Typography variant="h6">
              User have not movie on wishlist!
            </Typography>
          ) : (
            wishlist.map((movie) => {
              return (
                <Grid key={movie.id} item xs={3}>
                  <MovieCard
                    id={movie.id}
                    type={movie.type}
                    image={movie.image}
                    voteAverage={movie.voteAverage}
                    name={movie.name}
                    firstAirDate={movie.firstAirDate}
                    originalName={movie.originalName}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </div>
  );
}
