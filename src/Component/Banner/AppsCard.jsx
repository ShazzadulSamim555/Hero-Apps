import React from "react";
import { FaRegStar, FaCloudDownloadAlt } from "react-icons/fa";
import { GrInstallOption } from "react-icons/gr";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { id, image, title, size, ratingAvg, downloads } = app;

  const formate = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(2).replace(/\.0$/, "") + "k";
    }
    return num;
  };
  return (
    <Link to={`/app/${id}`}>
      <div
        className="bg-gray-200 p-3 space-y-2 md:p-10 rounded-lg hover:bg-gradient-to-b
from-[#8d8daa]
via-[#dfdfde]
to-[#f7f5f2]"
      >
        <div>
          <img
            className="h-20 md:h-52 w-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <h3 className="text-2xl font-semibold text-center">{title}</h3>
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <button className="btn btn-ghost">
            <FaCloudDownloadAlt /> {formate(downloads)}
          </button>
          <button className="btn btn-ghost hidden sm:inline-flex">
            <FaRegStar /> {ratingAvg}
          </button>
          <button className="btn btn-ghost">
            <GrInstallOption /> {size}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
