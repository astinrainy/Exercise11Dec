import * as React from "react";
import { Accordion } from "../components/accordion";

const getProducts = () => {
  fetch("https://minyoongicat.herokuapp.com/product")
    .then((res) => res.json())
    .then((products) => {
      console.log(products);
    });
};

getProducts();

export const Faq = () => {
  // const [panel1IsShown, setPanel1IsShown] = React.useState(false);
  // const [panel2IsShown, setPanel2IsShown] = React.useState(false);
  // const [panel3IsShown, setPanel3IsShown] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 divide-y divide-gray-200">
      <button
        onClick={() => {
          fetch("https://minyoongicat.herokuapp.com/product", {
            method: "POST",
            body: JSON.stringify({
              name: "Paula",
              related: []
            }),
            headers: {
              accept: "application/json",
              "Content-Type": "application/json"
            }
          })
            .then((res) => res.json())
            .then((products) => {
              console.log(products);
            });
        }}
      >
        Create product
      </button>
      <Accordion
        title="What's the best thing about Switzerland?"
        isShown={activeIndex === 0}
        setIsShown={() => {
          if (activeIndex === 0) {
            setActiveIndex(-1);
          } else {
            setActiveIndex(0);
          }
        }}
      >
        <p className="text-base text-gray-500">
          I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </Accordion>
      <Accordion
        title="How can I get refund?"
        isShown={activeIndex === 1}
        setIsShown={() => {
          if (activeIndex === 1) {
            setActiveIndex(-1);
          } else {
            setActiveIndex(1);
          }
        }}
      >
        <p className="text-base text-gray-500">
          We do not give refund, so try at your risk.
        </p>
        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          facere hic sed nemo porro error libero corrupti voluptas assumenda
          nesciunt fugiat rem, aut, rerum quaerat eum accusamus adipisci. Culpa,
          modi amet est nobis odio eveniet! Quisquam ipsum alias molestiae
          ipsam.
        </p>
      </Accordion>
      <Accordion
        title="Can I become a millionaire by learning JavaScript?"
        isShown={activeIndex === 2}
        setIsShown={() => {
          if (activeIndex === 2) {
            setActiveIndex(-1);
          } else {
            setActiveIndex(2);
          }
        }}
      >
        <p className="text-base text-gray-500">
          The only thing that can surely make you a millionaire is by having one
          as your parents. Everything else can't ensure that.
        </p>
      </Accordion>
    </div>
  );
};
