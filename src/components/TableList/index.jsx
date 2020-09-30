import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

TableList.propTypes = {
  list: PropTypes.array,
  width: PropTypes.string,
};

TableList.defaultProps = {
  list: [{ title: "example", link: "" }],
};

export default function TableList(props) {
  const history = useHistory();

  return (
    <div style={{ width: props.width }} className="table-list">
      {props.list.map((item, index) => {
        return (
          <div
            key={index}
            className="table-list__item"
            onClick={() => {
              history.push(item.link);
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle1"
              className="table-list__item-typography"
            >
              {item.title}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
