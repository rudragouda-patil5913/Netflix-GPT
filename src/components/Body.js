import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/moviedetails/:id",
    element: <MovieDetails />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
