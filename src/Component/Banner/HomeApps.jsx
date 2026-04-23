import React, { useContext, useState } from "react";
import { AppContext, AppProvider } from "../Central/AppContext";
import { RouterProvider } from "react-router";
import { router } from "../../Routes/Routes";
import AppsCard from "./AppsCard";

const HomeApps = () => {
  const { apps } = useContext(AppContext);

  const [showAll, setShowAll] = useState(false);

  const displayedApps= showAll ? apps: apps.slice(0,12);

  return (
    <div className="space-y-5">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-semibold">Trending Apps</h2>
        <p className="text-sm font-semibold text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-11/12 mx-auto">
        {displayedApps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>

      <div>
        <button onClick={()=> setShowAll(!showAll)}
          className="btn btn-primary mx-auto flex bg-gradient-to-r
from-blue-500
via-purple-500
to-pink-500 border-none"
        >
          {showAll?"Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default HomeApps;
