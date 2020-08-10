import React from "react";
import "./jumbotron.css";
import Intro from "../intro/intro";

export default function navBar() {
  return (
    <div className="jumbotron">
      <nav className="nav">
        <ul>
          <li className="link">
            <a href="#projects-container">
              <h4>Projects</h4>
            </a>
          </li>
          <li className="link">
            <a href="#certifications-container">
              <h4>Certifications</h4>
            </a>
          </li>
          <li className="link">
            <a href="#articles-container">
              <h4>Articles</h4>
            </a>
          </li>
          <li className="link">
            <a href="#form">
              <h4>Contacts</h4>
            </a>
          </li>
        </ul>
      </nav>
      <Intro />
    </div>
  );
}
