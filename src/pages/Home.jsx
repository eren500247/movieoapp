import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const {data : nowPlayingData} = useFetch("/movie/now_playing")
  const {data : topRatedData} = useFetch("/movie/top_rated")
  const {data : popularTvShowData} = useFetch("/tv/popular")
  const {data : onTheAirShowData} = useFetch("/tv/on_the_air")

  return (
    <div className="">
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending Show"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"} trending={false} media_type={"movie"}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} trending={false} media_type={"movie"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Shows"} trending={false} media_type={"tv"}/>
      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} trending={false} media_type={"tv"}/>
    </div>
  );
};

export default Home;
