import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../Central/AppContext";
import { FaDownload } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import Rating from "./Rating";

const AppDetails = () => {
  const { id } = useParams();
  const { apps,installApps, installedApps } = useContext(AppContext);

  const formate = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1);
    }
    return num;
  };

  const findApp = apps.find((app) => app.id === parseInt(id));

  
  if (!findApp) return <div className="text-center pt-20">Loading...</div>;

  const { image, title, size, ratingAvg, downloads, company, reviews,ratings } =
    findApp;

    // console.log(installedApps);

  const isInstalled= installedApps.includes(findApp.id);
  
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
          `,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-5 pt-24 pb-10 space-y-8">
      
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              className="h-64 md:h-80 lg:h-96 object-contain rounded-3xl shadow-lg"
              src={image}
              alt={title}
            />
          </div>


          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                {title}
              </h2>
              <h4 className="text-lg text-gray-600">
                Developed By:{" "}
                <span className="text-gray-900 font-semibold">{company}</span>
              </h4>
            </div>

            <div className="border-b-2 border-gray-300 w-full"></div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <div className="space-y-1">
                <p className="text-2xl flex justify-center md:justify-start text-blue-600">
                  <FaDownload />
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Downloads
                </p>
                <h3 className="text-2xl font-bold">{formate(downloads)}k+</h3>
              </div>

              <div className="space-y-1">
                <p className="text-2xl flex justify-center md:justify-start text-yellow-500">
                  <FaRegStar />
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Rating
                </p>
                <h3 className="text-2xl font-bold">{ratingAvg}</h3>
              </div>

              <div className="space-y-1">
                <p className="text-2xl flex justify-center md:justify-start text-purple-600">
                  <MdRateReview />
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Reviews
                </p>
                <h3 className="text-2xl font-bold">{formate(reviews)}k</h3>
              </div>
            </div>

            <div className="pt-5">
              <button onClick={()=>installApps(findApp.id)}  className="btn btn-primary w-full md:w-auto px-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white font-bold">
                {isInstalled ? "Installed" : `Install Now (${size})`}
              </button>
            </div>
          </div>
        </div>

        <div className="px-10">
            <h2 className="text-3xl font-semibold">Ratings</h2>

            <div>
                <Rating ratings={ratings}></Rating>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
