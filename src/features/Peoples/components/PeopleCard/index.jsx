import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { moivesDbConstants as path } from "../../../../constants";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { useHistory } from "react-router-dom";
import avatarDefault from "../../../../assets/images/default_avatar.png";

PeopleCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  knownFor: PropTypes.array,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function PeopleCard(props) {
  const { image, name, knownFor, id } = props;
  const [expanded, setExpanded] = useState(false);
  const history = useHistory();

  return (
    <div className="people-card">
      <Card className="people-card__wraper">
        <CardMedia
          className="people-card__media"
          image={image ? path.images + image : avatarDefault}
          title={name}
          onClick={() => {
            history.push(`/peoples/person/${id}`);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        <CardContent>
          <List>
            <ListItem
              disableGutters
              button
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <ListItemText
                primary={<Typography variant="h6">{name}</Typography>}
              />
              <ListItemIcon>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemIcon>
            </ListItem>
          </List>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {knownFor &&
              knownFor.map((item) => {
                return (
                  <Typography
                    key={item.id}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.name || item.title}
                  </Typography>
                );
              })}
          </Collapse>
        </CardContent>
      </Card>
    </div>
  );
}
