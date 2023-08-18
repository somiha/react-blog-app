import React from "react";
import sidebar from "../../assests/img/sidebar.jpeg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebar} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          dolor suscipit placeat, cumque, quos aliquam voluptates itaque nobis
          quam dolorum vel rerum architecto dolore excepturi dicta, sequi unde
          distinctio quasi.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Code">
              Code
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Read">
              Read
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cook">
              Cook
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial"></div>
        <FontAwesomeIcon className="sidebarIcon" icon={faFacebook} />
        <FontAwesomeIcon className="sidebarIcon" icon={faInstagram} />
        <FontAwesomeIcon className="sidebarIcon" icon={faPinterest} />
        <FontAwesomeIcon className="sidebarIcon" icon={faTwitter} />
      </div>
    </div>
  );
}
