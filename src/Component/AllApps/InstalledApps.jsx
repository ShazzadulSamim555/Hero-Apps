import React, { useContext } from "react";
import { AppContext } from "../Central/AppContext";
import InstalledAppCard from "./InstalledAppCard";

const InstalledApps = () => {
    const {apps, installedApps}= useContext(AppContext);

    const installedList= apps.filter(app=> installedApps.includes(app.id));
    console.log(installedList);

  return (
    <div className="min-h-screen w-full relative py-10 px-7">
      {/* Aurora Dream Corner Whispers */}
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
      
      <div className="relative space-y-5">

        <div className="space-y-1.5 text-center">
            <h1 className="text-3xl font-semibold">Your Installed Apps</h1>
            <p className="text-sm text-gray-600 font-semibold">Explore All Trending Apps on the Market developed by us</p>
        </div>

        <p className="text-blue-700 text-sm font-semibold">{installedList.length} Apps Found</p>

        <div className="space-y-3">
            {
               installedList.map((installed)=> <InstalledAppCard key={installed.id} installed={installed}></InstalledAppCard>) 
            }
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
