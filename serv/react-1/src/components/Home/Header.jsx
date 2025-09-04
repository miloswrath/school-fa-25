import React from "react";
import "./Header.css";

export default function Header({ humanDate, machineDate }) {
  return (
    <>
      <header className="header">
        <h1>Zak&apos;s New Website</h1>
        <p>
          Today is{' '}
          <time className="js-today" dateTime={machineDate}>
            {humanDate}
          </time>
          .
        </p>
      </header>

      <nav className="navbar">
        <a className="rainbow-link" href="https://github.com/miloswrath">
          My Github Profile
        </a>
        <a className="rainbow-link" href="https://www.counter-strike.net/cs2">
          My Favorite Video Game
        </a>
        <a className="rainbow-link" href="https://www.doordash.com/">
          In case you&apos;re hungry...
        </a>
        <a href="#" className="right">
          Link
        </a>
      </nav>
    </>
  );
}
