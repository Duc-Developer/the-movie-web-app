import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { moivesDbConstants as path } from "../../../../constants";
import avatarDefault from "../../../../assets/images/default_avatar.png";

PersonInformation.propTypes = {
  details: PropTypes.object,
};

export default function PersonInformation(props) {
  const { details } = props;
  const now = new Date();
  return (
    <div className="person-information">
      <Card className="person-information__wrapper">
        <CardMedia
          className="person-information__media"
          image={
            details.profile_path
              ? path.images + details.profile_path
              : avatarDefault
          }
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h4">Personal Info:</Typography>
          <Typography variant="h6">Known For:</Typography>
          {!details.known_for_department ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              {details.known_for_department}
            </Typography>
          )}
          <Typography variant="h6">Gender:</Typography>
          {!details.gender ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              {details.gender === 1 ? "female" : "male"}
            </Typography>
          )}
          <Typography variant="h6">Birthday:</Typography>
          {!details.birthday ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              {`${details.birthday} (${
                parseInt(now.getFullYear()) -
                parseInt(details.birthday.slice(0, 4))
              } years old)`}
            </Typography>
          )}
          <Typography variant="h6">Death Day:</Typography>
          {!details.deathday ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <Typography variant="subtitle1">{details.deathday}</Typography>
          )}
          <Typography variant="h6">Place of Birth:</Typography>
          {!details.place_of_birth ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <Typography variant="subtitle1">
              {details.place_of_birth}
            </Typography>
          )}
          <Typography variant="h6">Also Known As:</Typography>
          {!details.also_known_as ? (
            <Typography variant="subtitle1" color="error">
              None information
            </Typography>
          ) : (
            <div>
              {details.also_known_as.map((item, index) => {
                return (
                  <Typography key={index} variant="subtitle1" color="primary">
                    {item}
                  </Typography>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
