import React from "react";
import { Link } from "react-router-dom";
// import "../style.scss"

export default function Header({ back }) {
  return (
    <header className="header">
      <div className="width">
        {back && (
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                fill="currentColor"
                d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"
              />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="/" className="iwatch-header">
            iWatchCrypto!
          </Link>
        </h1>

        <ul className="nav">
          <li className="to-login">
            <Link to="/login">Login</Link>
          </li>
          <li className="to-register">
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
