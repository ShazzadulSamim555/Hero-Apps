import React from "react";
import error from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="space-y-3 flex flex-col items-center justify-center">
      <div>
        <img src={error} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Oops, page not found!</h1>
        <p className="text-gray-600 font-semibold">
          The page you are looking for is not available.
        </p>
      </div>

      <Link to='/'>
        <button
          className="btn btn-primary border-none bg-gradient-to-r
from-blue-500
via-purple-500
to-pink-500"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
