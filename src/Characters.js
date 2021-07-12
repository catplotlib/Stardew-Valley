import data from "./data";
import React, { useState, useEffect } from "react";
import List from "./List";


function Characters() {
  const [villagers, setVillagers] = useState(data);

  return (
    <main>
      <section className="villagers">
      <h1>Meet our Lovely Villagers</h1>
        {villagers.map((villager, index) => {
          return (
            <>
              <List key={index} {...villager} index={index} />
            </>
          );
        })}

      </section>
    </main>
  );
}

export default Characters;
