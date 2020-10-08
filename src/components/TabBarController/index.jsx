import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabBarController.propTypes = {
    tabChildren: PropTypes.array
}

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box p={2}>{children}</Box>}</div>;
}

export default function TabBarController(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          //   variant="fullWidth"
          aria-label="full width tabs example"
        >
          {
              props.tabChildren.map((item, index) => {
                  return (
                      <Tab key={index} label={item.name} />
                  )
              })
          }
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        {/* <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel> */}
        {
            props.tabChildren.map((item, index) => {
                return (
                    <TabPanel key={index} value={value} index={index}>
                        {item.node}
                    </TabPanel>
                )
            })
        }
      </SwipeableViews>
    </div>
  );
}
