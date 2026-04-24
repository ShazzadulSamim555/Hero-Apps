import React, { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { TiStarOutline } from "react-icons/ti";
import { AppContext } from "../Central/AppContext";

const InstalledAppCard = ({ installed }) => {
    const {uninstall}= useContext(AppContext);

    const {downloads, ratingAvg, size}=installed;

    const formate= (num)=>{
        if(num>=1000){
           return (num/1000).toFixed(1);
        }
        return num;
    }
  return (
    <div
      className="bg-gradient-to-r
from-slate-200
via-slate-300
to-slate-400 rounded-2xl p-3"
    >
      <div className="flex items-center flex-1 md:gap-5">
        <div>
            <img className="h-20 rounded-lg" src={installed.image} alt="" />
        </div>

        <div className="space-y-2">
            <h2 className="text-xl font-semibold">{installed.title}</h2>

            <div className="flex gap-4">
                <p className="flex items-center gap-1 text-sm text-gray-600"><FaDownload /> {formate(downloads)}k</p>
                <p className="flex items-center gap-1 text-sm text-yellow-600"><TiStarOutline /> {ratingAvg}</p>
                <p className="flex items-center gap-1 text-sm text-green-500">{size}</p>
            </div>
        </div>

        <div className="flex flex-1 justify-end w-full items-center">
            <button onClick={()=>uninstall(installed.id)} className="btn btn-primary">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstalledAppCard;
