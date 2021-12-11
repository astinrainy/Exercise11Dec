import React from "react";
import ReactDOM from "react-dom";

export function showWeekday() {
  const today = new Date();
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayLabel = dayLabels[today.getDay()];
  console.log({ todayLabel });
  // TODO: insert '<span class="text-xs">Today is <b class="underline">Sun</b></span>' using React

  // const dayElement = React.createElement(
  //   "b",
  //   { className: "underline" },
  //   todayLabel
  // );
  // const spanElement = React.createElement(
  //   "span",
  //   { className: "text-xs" },
  //   "Today is ",
  //   dayElement
  // );

  const target = document.querySelector("#today-weekday");
  ReactDOM.render(
    <span className="text-xs">
      Today is <b className="underline">{todayLabel}</b>
    </span>,
    target
  );
}
