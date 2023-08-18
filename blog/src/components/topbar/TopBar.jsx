import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flower from "../../assests/img/flower.jpg";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest,
  faSearchengin,
} from "@fortawesome/free-brands-svg-icons";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebook} />
        <FontAwesomeIcon className="topIcon" icon={faInstagram} />
        <FontAwesomeIcon className="topIcon" icon={faPinterest} />
        <FontAwesomeIcon className="topIcon" icon={faTwitter} />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="topImg" src={flower} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <FontAwesomeIcon className="topSearchIcon" icon={faSearchengin} />
      </div>
    </div>
  );
}
