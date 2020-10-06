import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { moivesDbConstants as path } from "../../constants";
import { useHistory } from "react-router-dom";

PeopleCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  role: PropTypes.string,
  avatarHeight: PropTypes.string,
};

export default function PeopleCard(props) {
  const { image, name, id, role, avatarHeight } = props;
  const history = useHistory();

  return (
    <div className="person-simple-card">
      <Card className="person-simple-card__wraper">
        <CardMedia
          className="person-simple-card__media"
          image={path.images + image}
          title={name}
          style={{ height: avatarHeight }}
          onClick={() => {
            history.push(`/peoples/person/${id}`);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        <CardContent>
          <Typography variant="h6">{role}</Typography>
          <Typography variant="body2">{name}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
