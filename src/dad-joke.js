import React from "react";
import ReactDOM from "react-dom";

const showDadJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "text/plain"
    }
  });

  const joke = await res.text();

  const target = document.querySelector("#dad-joke");
  ReactDOM.render(<span>{joke}</span>, target);
};

export const showJoke = async () => {
  const btn = document.querySelector("#show-joke-btn");
  btn.addEventListener("click", showDadJoke);
};
