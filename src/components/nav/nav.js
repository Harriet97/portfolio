import React, { Component } from "react";
import "./nav.css";

export default class nav extends Component {
  state = {
    hamburgerClicked: false,
  };

  displayNav = () => {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  };
  render() {
    return (
      <nav>
        <ul>
          <button onClick={() => this.displayNav()}>
            <ion-icon name="menu-outline"></ion-icon>
          </button>
          <li className={!this.state.hamburgerClicked ? "hidden" : null}>
            <a href="#aboutMe"> About Me </a>
          </li>
          <li className={!this.state.hamburgerClicked ? "hidden" : null}>
            <a href="#projects"> Projects </a>
          </li>
          <li className={!this.state.hamburgerClicked ? "hidden" : null}>
            <a href="#cv"> CV </a>
          </li>
          <li className={!this.state.hamburgerClicked ? "hidden" : null}>
            <a href="#contacts"> Contacts </a>
          </li>
        </ul>
      </nav>
    );
  }
}
