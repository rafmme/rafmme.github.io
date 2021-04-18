import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Forked from <i className="fas fa-moon"></i> {" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>José Coelho</strong>
          </a>
        </p>
        <p>
          Modified by <i className="fas fa-moon"></i> {" "}
          <a href="https://github.com/rafmme" className="has-text-white">
            <strong>Timileyin Farayola</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
