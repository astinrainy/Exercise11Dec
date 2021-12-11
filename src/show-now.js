import * as React from "react";
import * as ReactDOM from "react-dom";

console.log({ React });

const target = document.querySelector("#root");

console.log("target in show-now.js", target);

export const showNow = function () {
  const now = new Date().toLocaleTimeString();

  // const timeElement = React.createElement('span', { className: 'font-bold' }, now);
  // const timeElement = <span className="font-bold">{now}</span>;

  // const el = React.createElement("small", {}, "Now is ", timeElement);

  // this is comment
  /* this is also comment */

  const el = (
    <small className="text-4xl border border-gray-200 px-5 py-1 rounded-lg">
      Now is <span className="font-bold">{now}</span>
    </small>
  );

  ReactDOM.render(el, target);
};
