import { Button, InputBase } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderSlickMovie from "../../components/SliderSlickMovie";
import screenshotImg from "../../assets/images/Screenshot from 2020-10-01 21-02-16.jpg";
import { useHistory } from "react-router-dom";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  easing: "ease-in-out",
};

const titles = ["What's Popular", "Trending"];

export default function HomePage() {
  const [popularData, setPopularData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [currentPopularType, setCurrentPopularType] = useState("tv");
  const [currentTrendingType, setCurrentTrendingType] = useState("today");
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();

  function handleType(type, title) {
    if (title === titles[0]) {
      setCurrentPopularType(type);
      return;
    }
    if (title === titles[1]) {
      setCurrentTrendingType(type);
      return;
    }
  }

  function handleSearch(e) {
    setInputSearch(e.target.value)
  }

  async function getPopular() {
    let dataApi;
    if (currentPopularType === "tv") {
      dataApi = await axios
        .get(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=1`
        )
        .then((res) => {
          return res.data.results;
        });
      setPopularData(dataApi);
      return;
    }
    if (currentPopularType === "movies") {
      dataApi = await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}&language=vi&page=1`
        )
        .then((res) => res.data.results);
      setPopularData(dataApi);
      return;
    }
  }

  async function getTrending() {
    let dataApi;
    if (currentTrendingType === "today") {
      dataApi = await axios
        .get(
          ` https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}`
        )
        .then((res) => res.data.results);
      setTrendingData(dataApi);
      return;
    }
    if (currentTrendingType === "this week") {
      dataApi = await axios
        .get(
          ` https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_THE_MOVIES_API_KEY}`
        )
        .then((res) => res.data.results);
      setTrendingData(dataApi);
      return;
    }
  }

  useEffect(() => {
    getPopular();
    getTrending();
  }, [
    popularData.length,
    trendingData.length,
    currentPopularType,
    currentTrendingType,
  ]);
  return (
    <div className="home-page">
      <div className="home-page__header">
        <div className="home-page__header-content">
          <h1>Welcome.</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <div className="home-page__header-content-search-bar">
            <InputBase
              className="home-page__header-content-input"
              placeholder="Search for movies, TV shows, person..."
              onChange={(e) => {handleSearch(e)}}
            />
            <Button 
            onClick={() => {
              if(inputSearch === ""){
                return;
              }
              history.push({
                pathname: "/search",
                search: `?query=${inputSearch}`
              })
            }}
            >
              Search
              </Button>
          </div>
        </div>
      </div>
      <div className="home-page__body">
        <SliderSlickMovie
          data={popularData}
          handleType={(type, title) => {
            handleType(type, title);
          }}
          title={titles[0]}
          switch1="tv"
          switch2="movies"
        />
        <SliderSlickMovie
          data={trendingData}
          handleType={(type, title) => {
            handleType(type, title);
          }}
          title={titles[1]}
          switch1="today"
          switch2="this week"
        />
      </div>
      <div>
        <img id="screen-shot-image-home" src={screenshotImg} alt="screen-shot-img"/>
      </div>
    </div>
  );
}
