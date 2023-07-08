import React, { Fragment } from "react";
import vg from "../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to All your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            accusantium veniam officia vero, exercitationem dolorem!{" "}
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            voluptatem nam culpa cupiditate ab quia magni tempora repellendus
            illo tempore quam facilis asperiores et laborum nulla error minus
            numquam commodi debitis sunt neque earum natus in? Veritatis nobis
            voluptates aliquam deserunt error, a ex, nisi hic natus dolore
            temporibus nihil.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
