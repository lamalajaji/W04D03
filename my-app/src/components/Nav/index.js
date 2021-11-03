import React from 'react'
import "./style.css";
import {  Link } from "react-router-dom";


export default function Nav() {
    return (
      <div className="Nav">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Cards">Cards</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}
