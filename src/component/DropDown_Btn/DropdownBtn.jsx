import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./DropdownBtn.css";
import "./Webkit.css";
export default function DropdownBtn({ type }) {
  const [change, setText] = useState({
    text: type === "Country" ? "United States" : type,
  });
 
  const showItemCountry = (e) => {
    document.getElementById("dropList_Country").classList.toggle("list-active");
    document.getElementById("dropdown_icon").classList.toggle("dropdown_icon_is-active");
  };

  const showItemCatrgory = (e) => {
      document.getElementById("dropList_Category").classList.toggle("list-active");
      document.getElementById("dropdown_icon_category").classList.toggle("dropdown_icon_is-active");
  };

  const handleClickCountry = (e) => {
  
    let CountryCode = e.target.textContent;
    setText({ text: CountryCode });

    e.target.parentNode.querySelector(".option-active") &&
    e.target.parentNode.querySelector(".option-active").classList.remove("option-active");

    e.target.classList.add("option-active");
    e.target.parentNode.classList.remove("list-active");
    document.getElementById("dropdown_icon").classList.remove("dropdown_icon_is-active");   

  };
  const handleClickCatrgory = (e) => {
    let Category = e.target.textContent;
    setText({ text: Category });

    e.target.parentNode.querySelector(".option-active") &&
    e.target.parentNode.querySelector(".option-active").classList.remove("option-active");

    e.target.classList.add("option-active");
    e.target.parentNode.classList.remove("list-active");
    document.getElementById("dropdown_icon_category").classList.remove("dropdown_icon_is-active");
  };

  return (
    <>
      <div className="box">
        {type === "Country" ? (
          <>
            <div
              className="Drop_btn country_btn"
              id="display"
              onClick={showItemCountry}
            >
              <span id="dropdown_txt">{change.text}</span>{" "}
              <span id="dropdown_icon">
                <FontAwesomeIcon icon={faAngleDown} size="1x" />
              </span>
            </div>
            <ul
              className="list"
              id="dropList_Country"
              onClick={handleClickCountry}
            >
              <li id="au" className="option">
                Australia
              </li>{" "}
              <li id="ca" className="option">
                Canada
              </li>
              <li id="cn" className="option">
                China
              </li>
              <li id="fr" className="option">
                France
              </li>{" "}
              <li id="in" className="option">
                India
              </li>
              <li id="ru" className="option">
                Russia
              </li>{" "}
              <li id="sa" className="option">
                Saudi Arabia
              </li>{" "}
              <li id="sg" className="option">
                Singapore
              </li>{" "}
              <li id="ae" className="option">
                United Arab
              </li>{" "}
              <li id="us" className="option">
                United States
              </li>
            </ul>
          </>
        ) : (
          <>
            <div
              className="Drop_btn category_btn"
              id="display"
              onClick={showItemCatrgory}
            >
              <span id="dropdown_txt_category">{change.text}</span>{" "}
              <span id="dropdown_icon_category">
                <FontAwesomeIcon icon={faAngleDown} size="1x" />
              </span>
            </div>
            <ul
              className="list"
              id="dropList_Category"
              onClick={handleClickCatrgory}
            >
              <li id="1" className="option">
                Business
              </li>
              <li id="entertainment" className="option">
                Entertainment
              </li>
              <li id="general" className="option">
                General
              </li>
              <li id="health" className="option">
                Health
              </li>
              <li id="science" className="option">
                Science
              </li>
              <li id="sports" className="option">
                Sports
              </li>{" "}
              <li id="technology" className="option">
                Technology
              </li>{" "}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
