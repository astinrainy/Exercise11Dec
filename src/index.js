import React from "react";
import ReactDOM from "react-dom";
import { Career } from "./pages/career";
// import { Faq } from "./pages/faq";
import { Marketplace } from "./pages/marketplace";
// import { NumberControl } from "./components/number-control";

ReactDOM.render(<Marketplace />, document.querySelector("#root"));

// function showNow() {
//   const now = new Date().toLocaleTimeString();

//   const nowElement = document.querySelector("#now");
//   nowElement.innerHTML = `
//   <div>
//   <small>Now is <span class="font-bold">${now}</span></small>
//   <input />
//   </div>
// `;
// }

// setInterval(showNow, 1000);

// function showNowReact() {
//   const now = new Date().toLocaleTimeString();

//   const nowElement = document.querySelector("#now-react");

//   ReactDOM.render(
//     <div>
//       <small>
//         Now is <span class="font-bold">{now}</span>
//       </small>
//       <input />
//     </div>,
//     nowElement
//   );
// }

// setInterval(showNowReact, 1000);
