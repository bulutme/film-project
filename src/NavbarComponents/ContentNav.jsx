import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import "./ContentNav.css";
import logo from "./LOGO.png";
import Search from "./search";

class ContentNav extends Component {
  render() {
    return (
      <div className="content-nav">
        <div className="content-nav-left">
          <Link to="/film-project">
            {" "}
            <img className="content-nav-logo" src={logo} alt="" />
          </Link>

          <button>
            <Link to="/film-project">Ana Sayfa</Link>
          </button>
          <button>
            <Link to="/film-project/films">Filmler</Link>
          </button>
          <button>
            <Link to="/film-project/people">Oyuncular</Link>
          </button>
        </div>
        <div className="content-nav-right">
          <Search className="search-input" />
        </div>
        <div className="dropdownx">
          <span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              class="svg-inline--fa fa-bars fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </span>
          <div className="dropdown-contentx">
            <p>
              <Link className="p" to="/film-project">
                Ana Sayfa
              </Link>
            </p>
            <p>
              <Link className="p" to="/film-project/films">
                Filmler
              </Link>
            </p>
            <p>
              <Link className="p" to="/film-project/people">
                Oyuncular
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentNav;
