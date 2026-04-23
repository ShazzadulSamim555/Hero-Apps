import React from "react";
import { BsGooglePlay } from "react-icons/bs";
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../../assets/hero.png";

const BannerDetails = () => {
  return (
    <div className="space-y-7 mt-7">
      <div className="space-y-5 max-w-3xl mx-auto text-center">
        <h2 className="text-6xl">
          We Build{" "} <br />
          <span className="font-semibold text-purple-600">Productive</span> Apps
        </h2>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-5 justify-center">
          <button className="btn btn-outline">
            <BsGooglePlay /> Google Play
          </button>
          <button className="btn btn-outline">
            <FaAppStoreIos /> Apps Store
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center">
          <img className="w-2xl" src={hero} alt="" />
        </div>
        <div className="bg-linear-to-r from-indigo-800 to-violet-500 text-white md:p-10 space-y-4">
          <h3 className="text-3xl font-semibold text-center">
            Trusted by Millions, Built for You
          </h3>
          <div className="flex flex-wrap justify-around">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">Total Downloads</p>
              <h1 className="text-4xl font-bold">29.6 M</h1>
              <p>21% more than last month</p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">Total Reviews</p>
              <h1 className="text-4xl font-bold">906 K</h1>
              <p>21% more than last month</p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">Total Downloads</p>
              <h1 className="text-4xl font-bold">29.6 M</h1>
              <p>21% more than last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
