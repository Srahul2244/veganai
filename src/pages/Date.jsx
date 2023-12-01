import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Table from "./Table";

const Dates = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const onDateChange = (date) => {
    setDate(date);
    // Reset selected time when date changes
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const hours = selectedTime && selectedTime.substring(0, 2);
  const minutes = selectedTime && selectedTime.substring(3, 5);

  const startDate = new Date(date);
  if (hours && minutes) {
    startDate.setHours(hours, minutes, 0, 0);
  }

  const endDate = new Date(date);
  if (hours && minutes) {
    endDate.setHours(hours, minutes + 30, 0, 0);
  }

  const unavailableSlots = ["12:30 PM to 1 PM", "3:30 PM to 4:30 PM"];

  return (
    <div>
      <div className="flex w-9/12 h-auto border-2 border-l-black mt-1 m-auto">
        <div className="px-10 py-2">
          <Calendar
            showWeekNumbers
            onChange={onDateChange}
            value={date}
            className="h-[320px]"
          />
        </div>
        <div className="">
          <div className="flex gap-4 py-4">
            <div
              className={`px-10 py-3 border-2 border-black cursor-pointer ${
                selectedTime === "10:20 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("10:20 AM")}
            >
              10:20 AM
            </div>
            <div
              className={`px-10 py-3 border-2 border-black cursor-pointer ${
                selectedTime === "11:00 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("11:00 AM")}
            >
              11:00 AM
            </div>
            <div
              className={`px-10 py-3 border-2 border-black cursor-pointer ${
                selectedTime === "10:00 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("10:00 AM")}
            >
              10:00 AM
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div
              className={`px-10 py-2 border-2 border-black cursor-pointer ${
                selectedTime === "11:10 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("11:10 AM")}
            >
              11:10 AM
            </div>
            <div className="w-20 h-[0px] mx-10 my-6 border-2 border-black border-dashed"></div>
            <div
              className={`px-10 py-2 border-2 border-black cursor-pointer ${
                selectedTime === "10:40 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("10:40 AM")}
            >
              10:40 AM
            </div>
          </div>
          <div className="flex gap-4 py-4">
            <div
              className={`px-10 py-2 border-2 border-black cursor-pointer ${
                selectedTime === "12:00 PM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("12:00 PM")}
            >
              12:00 PM
            </div>
            <div className="w-20 h-[0px] mx-10 my-6 border-2 border-black border-dashed"></div>
            <div
              className={`px-10 py-2 border-2 border-black cursor-pointer ${
                selectedTime === "10:45 AM" ? "bg-gray-300" : ""
              }`}
              onClick={() => handleTimeClick("10:45 AM")}
            >
              10:45 AM
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Selected Date: {date.toDateString()}</p>
        {selectedTime && <p>Selected Time: {selectedTime}</p>}
      </div>
      <Table
        day={date.getDay()}
        selectedTime={selectedTime}
        startDate={startDate}
        endDate={endDate}
        unavailableSlots={unavailableSlots}
      />
    </div>
  );
};

export default Dates;
