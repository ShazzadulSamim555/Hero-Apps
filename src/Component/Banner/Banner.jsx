import React, { useEffect } from "react";
import BannerDetails from "./BannerDetails";
import HomeApps from "./HomeApps";

const Banner = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <BannerDetails></BannerDetails>

      <div className="min-h-screen w-full relative pt-10">
        {/* Aurora Dream Diagonal Flow */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
         radial-gradient(ellipse 80% 60% at 5% 40%, rgba(175, 109, 255, 0.48), transparent 67%),
        radial-gradient(ellipse 70% 60% at 45% 45%, rgba(255, 100, 180, 0.41), transparent 67%),
        radial-gradient(ellipse 62% 52% at 83% 76%, rgba(255, 235, 170, 0.44), transparent 63%),
        radial-gradient(ellipse 60% 48% at 75% 20%, rgba(120, 190, 255, 0.36), transparent 66%),
        linear-gradient(45deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
        />
        <div className="relative z-20">
          <HomeApps></HomeApps>
        </div>
      </div>
    </div>
  );
};

export default Banner;
