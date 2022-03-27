import "../SideNewsPannel.css";
import React from "react";
import defaultImg from "../../assets/defaultImg.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HealthItem({ title, imageUrl, newsUrl }) {
    return (
      <>
         <a className="item-container" href={newsUrl}>
          <div className="" id="img-container">
            <img src={imageUrl ? imageUrl : defaultImg} alt="" />
          </div>
          <div id="post-heading">
          {title ? title.slice(0, 50) : ""}...
          </div>
        </a>
      </>
    );
  }

