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

const Movies = React.lazy(() => import("./features/Movies"));
const TvShows = React.lazy(() => import("./features/TvShows"));

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
            <Route path="/movies" component={Movies}/>
            <Route path="/tv-shows" component={TvShows}/>
  
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
