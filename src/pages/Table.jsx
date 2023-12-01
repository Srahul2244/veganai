// Table.js
import React, { useEffect } from "react";

const Table = ({ day, selectedTime, startDate, endDate, unavailableSlots }) => {
  useEffect(() => {
    // You can perform any additional logic here if needed
  }, [day, selectedTime, startDate, endDate, unavailableSlots]);

  // Function to format time as HH:mm AM/PM
  const formatTime = (time) => {
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Function to format day as abbreviated day name (e.g., Thu)
  const formatDay = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className="flex justify-center">
      <table className="w-7/12 bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Day</th>
            <th className="py-2 px-4 border-b">Start</th>
            <th className="py-2 px-4 border-b">End</th>
            <th className="py-2 px-4 border-b">Unavailable</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4 border-r">
              <span className="block">{formatDay(startDate)}</span>
            </td>
            <td className="py-2 px-4 border-r">{formatTime(startDate)}</td>
            <td className="py-2 px-4 border-r">{formatTime(endDate)}</td>
            <td className="py-2 px-4 ">
              {unavailableSlots.map((time, i) => (
                <span
                  key={i}
                  className={`block ${
                    isUnavailableTime(time) ? "text-gray-400" : ""
                  }`}
                >
                  {time}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const isUnavailableTime = (time) => {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return time.includes(currentTime);
};

export default Table;
