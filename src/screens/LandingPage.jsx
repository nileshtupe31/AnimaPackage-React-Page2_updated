import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return(
        <Link to={"/firstPage"} style={{flex: 1}}>
            <img src="/img/first.png" />
            <div className="overlap-20">
              <div className="text-wrapper-9">Next</div>
            </div>
        </Link>
    )
}