import React from "react";
import { 
    BrowserRouter as Router,
    Route, 
    Switch, 
    useRouteMatch 
} from "react-router-dom";
import CommonPage from "../../components/CommonPage";

export default function Moives() {
  const match = useRouteMatch();
  
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path={`${match.url}/popular`}>
          <CommonPage />
        </Route>
        <Route exact path={`${match.url}/now-playing`}>
          <CommonPage />
        </Route>
        <Route exact path={`${match.url}/upcomming`}>
          <CommonPage />
        </Route>
        <Route exact path={`${match.url}/toprated`}>
          <CommonPage />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}
