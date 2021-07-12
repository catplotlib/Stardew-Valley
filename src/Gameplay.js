// const Gameplay=()=>{
//   return<h1>Gameplay</h1>
// }

// export default Gameplay;

import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import videos from "./Videos";

function Gameplay() {
  const [view, setView] = useState(videos);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > view.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = view.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > view.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Gameplays</h2>
      </div>
      <div className="section-center">
        {view.map((vid, vidIndex) => {
          const { id, src } = vid;

          let position = "nextSlide";
          if (vidIndex === index) {
            position = "activeSlide";
          }
          if (
            vidIndex === index - 1 ||
            (index === 0 && vidIndex === view.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <iframe  src={src}></iframe>
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Gameplay;
