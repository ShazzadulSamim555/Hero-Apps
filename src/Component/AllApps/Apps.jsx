import React, { useContext } from "react";
import { AppContext } from "../Central/AppContext";
import AppsCard from "../Banner/AppsCard";

const Apps = () => {
  const { apps } = useContext(AppContext);
  return (
    <div>
      <div className="min-h-screen w-full relative py-10">
        
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

        <div className="relative z-10">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-semibold">Our All Applications</h3>
            <p className="text-sm text-gray-600 font-semibold">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-11/12 mx-auto pt-5">
              {apps.map((app) => (
                <AppsCard key={app.id} app={app}></AppsCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
