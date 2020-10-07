import React, { Suspense } from 'react';
import './App.scss';
import NavBarHeader from './features/NavBarHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import HomePage from './features/HomePage';
import Footer from './components/Footer';
import { movieRoutes, tvRoutes, peopleRoutes } from './constants';

const Movies = React.lazy(() => import("./features/Movies"));
const TvShows = React.lazy(() => import("./features/TvShows"));
const Peoples = React.lazy(() => import("./features/Peoples"));
const Search = React.lazy(() => import("./features/SearchPage"));

function App() {
  
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <NavBarHeader />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path={movieRoutes.path} component={Movies}/>
            <Route path={tvRoutes.path} component={TvShows}/>
            <Route path={peopleRoutes.path} component={Peoples}/>
            <Route path="/search" component={Search} />
  
            <Route>
              <NotFound />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
