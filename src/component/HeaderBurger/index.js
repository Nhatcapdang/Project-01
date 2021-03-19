import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./styles.scss";
import Squa from "../../img/squa.png";

export default class MenuBurger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        customBurgerIcon={<i className="fas fa-bars" />}
      >
        <a id="home" className="menu-item" href="/">
          <i className="fas fa-star-of-david"></i> Home
        </a>
        <a id="about" className="menu-item" href="/about">
          <i className="fab fa-cc-discover"></i> Shop
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <i className="fas fa-star-of-david"></i> Blogs
        </a>
        <a onClick={this.showSettings} className="menu-item" href="/">
          <i className="fab fa-kickstarter"></i> Pages
        </a>
        <a onClick={this.showSettings} className="menu-item" href="/">
          <i className="fas fa-street-view"></i>Contact
        </a>
      </Menu>
    );
  }
}
