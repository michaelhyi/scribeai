import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./SmallCalendar.module.css";

const SmallCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
  };
  return (
    <div className="pt-4">
      <div className="mt-4 w-96 bg-white border-b-neutral-100 border-[1px] py-4 px-4 rounded-lg float-right shadow-md">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default SmallCalendar;

