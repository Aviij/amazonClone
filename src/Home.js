import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="\images\wallsku.jpg"
          alt="could not load the image "
        />
        <div className="home__row">
          <Product
            id="001"
            title="paitns 100ml rapid clean "
            price={200.99}
            rating={4}
            image="\images\homesku.jpg"
          />
          <Product
            id="002"
            title="paitns 100ml rapid clean "
            price={203.99}
            rating={2}
            image="\images\Greentube1.jpg"
          />
          <Product
            id="002"
            title="paitns 100ml rapid clean "
            price={203.99}
            rating={2}
            image="\images\Greentube.jpg"
          />
        </div>

        <Product
          id="003"
          title="paitns 100ml rapid clean "
          price={203.99}
          rating={2}
          image="\images\Greentube3.jpg"
        />
        <Product
          id="003"
          title="paitns 100ml rapid clean "
          price={203.99}
          rating={2}
          image="\images\Greentube4.jpg"
        />
      </div>
      <div className="home__row"></div>
    </div>
  );
}

export default Home;
