import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
   const { id } = useParams();
   console.log(id);
  return (
    <div>
      <Header />
    </div>
  );
};

export default MovieDetails;
