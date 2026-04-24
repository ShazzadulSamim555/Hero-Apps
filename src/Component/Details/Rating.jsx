import React from "react";
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const Rating = ({ ratings }) => {
  // ১. ডাটা চেক (যদি ratings না থাকে তবে খালি না দেখিয়ে মেসেজ দিবে)
  if (!ratings || ratings.length === 0) return <p>No ratings available</p>;

  return (
    <div className="w-full h-[300px] mt-5">
      {/* ২. ResponsiveContainer চার্টকে সব ডিভাইসে ফিট করবে */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={ratings} 
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          {/* ৩. XAxis-এ স্টারের সংখ্যা দেখাবে */}
          <XAxis 
            dataKey="star" 
            tickFormatter={(value) => `${value} ★`} 
            stroke="#4b5563"
          />
          
          {/* ৪. YAxis-এ কতজন ভোট দিয়েছে তা দেখাবে */}
          <YAxis hide />

          <Tooltip cursor={{fill: 'transparent'}} />

          {/* ৫. বার ডিজাইন */}
          <Bar 
            dataKey="count" 
            radius={[5, 5, 0, 0]} 
            barSize={40}
          >
            {/* ৬. স্টারের ওপর ভিত্তি করে আলাদা কালার */}
            {ratings.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.star >= 4 ? '#22c55e' : entry.star >= 3 ? '#eab308' : '#ef4444'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rating;