import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo } = this.props;

    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
              <img src={require("../img/logo8.png")} alt="logo"/>
              <img src={require("../img/logo7.png")} alt=""/>
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                    <Link
                      to="./"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Menu
                    </Link>
                    <div className="mega_menu_inner justify-content-center">
                      <ul className="dropdown-menu justify-content-center">
                        <li className="nav-item">
                          <ul className="dropdown-menu scroll justify-content-center">
                            <li className="nav-item">
                              <NavLink to="/" exact className="item">
                                <span className="text">Inicio</span>
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink
                                to="/Home-Tracking"
                                exact
                                className="item"
                              >
                                <span className="text">Desarrollo WordPress</span>
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dominios
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Servicios
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Pricing" className="nav-link" to="/Contact">
                      Contacto
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
