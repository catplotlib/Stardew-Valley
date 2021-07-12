import React from "react";

const List = ({ key, name, image }) => {
  return (
    <div className="section-char">
      <main key={key} className="villager">
        <img src={image} alt="hello" className="photo" />
        <div className="item-info">
          <header>
            <h4>{name}</h4>
          </header>
          <a href={`https://stardewvalleywiki.com/${name}`} target="_blank">
            <button className="btn">know more</button>
          </a>
        </div>
      </main>
      {/* <Modal key={ key} name={name} /> */}
    </div>
  );
};

export default List;
