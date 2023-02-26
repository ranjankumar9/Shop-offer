import React, { useState } from "react";

import MenHover from "./sideBarhover/MenHover";
import WomenHover from "./sideBarhover/WomenHover";
import { CiSearch } from "react-icons/ci";
import Homekichenhover from "./sideBarhover/homekichenhover";
import ToyKidsHover from "./sideBarhover/ToykidsHover";
import BeautyHover from "./sideBarhover/beautyHover";

const Sidebar = () => {
  const [showHoverContent, setShowHoverContent] = useState({
    show: false,
    contentFor: "",
  });
  const SetHoverContent = (content) => {
    console.log("content", content);
    setShowHoverContent({
      show: true,
      contentFor: content,
    });
  };

  return (
    <div
      className="sidebar"
      onMouseLeave={() => {
        setShowHoverContent({ show: false, contentFor: "" });
      }}
    >
      <div className="categories">
        <h1>Top Categories</h1>
      </div>

      <div className="firstBlock">
        <div
          className="flex"
          onMouseEnter={() => {
            SetHoverContent("men");
          }}
        >
          <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30mobile4.png" />
          <h2>Men's Fashion</h2>
        </div>
        <div
          className="flex"
          onMouseEnter={() => {
            SetHoverContent("women");
          }}
        >
          <img src="https://i2.sdlcdn.com/img/leftnavicon09/30x30home_living2.png" />
          <h2>Women's Fashion</h2>
        </div>
        <div
          className="flex"
          onMouseEnter={() => {
            SetHoverContent("home");
          }}
        >
          <img src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg" />
          <h2> Home & Kitchen</h2>
        </div>
        <div
          className="flex"
          onMouseEnter={() => {
            SetHoverContent("toy");
          }}
        >
          <img src="https://i3.sdlcdn.com/img/leftnavicon09/30x30music1.png" />
          <h2>Toy's,Kids,Fashion & More</h2>
        </div>
        <div
          className="flex"
          onMouseEnter={() => {
            SetHoverContent("beauty");
          }}
        >
          <img src="https://i1.sdlcdn.com/img/leftnavicon09/fashion30x30_3.png" />
          <h2>Beauty & Health Products</h2>
        </div>
      </div>
      <div className="categories">
        <h1>More Categories</h1>
      </div>
      <div className="secondBlock ">
        <div className="item">Automotives</div>
        <div>Mobiles & Accesories</div>
        <div>Electronics</div>
        <div>Sports, Fitness & Outdoor</div>
        <div>Computers & Gaming</div>
        <div>Books, Media & Music</div>
        <div>Hobbies</div>
      </div>
      <div className="categories">
        <h1>Trending Searches</h1>
      </div>
      <div className="thirdBlock">
        <div className="center">
          <CiSearch />
          Kitchen Product
        </div>
        <div className="center">
          {" "}
          <CiSearch />
          Shoes for Men
        </div>
        <div className="center">
          {" "}
          <CiSearch />
          Kurti Set
        </div>

        <div className="center">
          {" "}
          <CiSearch />
          Sandal Men
        </div>
        <div className="center">
          {" "}
          <CiSearch />
          Sport shoe Men
        </div>
      </div>
      {/* float section below */}
      {showHoverContent.show ? (
        <div className="float-content">
          {showHoverContent.contentFor === "men" && <MenHover />}
          {showHoverContent.contentFor === "women" && <WomenHover />}
          {showHoverContent.contentFor === "home" && <Homekichenhover />}
          {showHoverContent.contentFor === "toy" && <ToyKidsHover />}
          {showHoverContent.contentFor === "beauty" && <BeautyHover />}
        </div>
      ) : null}
      {/* {showHoverContent.show ? (
        <div className={HoverContentClasses(showHoverContent.contentFor)}>
          {showHoverContent.contentFor === "men" ? <MenHover /> : null}
          {showHoverContent.contentFor === "women" ? <WomenHover /> : null}
        </div>
      ) : null} */}
    </div>
  );
};

export default Sidebar;
