import React from "react";
import List from "../Components/List/List";
import Navbar from "../Components/Navbar/Navbar";
import "./home.scss";
import { moviedata } from "../moviedata";
import Filter from "../Components/Filter";
import { useState } from "react";
import Addmovie from "../Components/Addmovie";

const Home = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie = (movie) => {
    moviedata.push(movie);
  };
  return (
    <div
      className="home"
      style={{ marginTop: "85px", backgroundColor: "rgba(0, 0, 0, 0.829)" }}
    >
      <Navbar />

      <Filter
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <Addmovie addMovie={addMovie} />
      </div>
      <List moviedata={moviedata} title={title} rating={rating} />
      {/* <List/> */}
    </div>
  );
};

export default Home;
