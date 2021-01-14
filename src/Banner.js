import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Getaaway</h1>
        <h5>Plan</h5>
        <Button variant="outlined">Explore Neaby</Button>
      </div>
    </div>
  );
}

export default Banner;
