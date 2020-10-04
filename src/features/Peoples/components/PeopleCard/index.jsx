import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { moivesDbConstants as path } from "../../../../constants";
import {
  CardActions,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

PeopleCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  knownFor: PropTypes.array,
};

export default function PeopleCard(props) {
  const { image, name, knownFor } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="people-card">
      <Card className="people-card__wraper">
        <CardMedia
          className="people-card__media"
          image={path.images + image}
          title={name}
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
