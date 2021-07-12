import React, { useRef } from "react";
import classes from "./SearchBar.css";
import { useGlobalContext } from "../../context";
import axios from "axios";

const SearchBar = () => {
  const { updateGists, updateUsername } = useGlobalContext();
  const user = useRef("");
  const instance = axios.create({
    baseURL: "https://api.github.com/",
  });

  instance.defaults.headers.common["Authorization"] =
    "";

  const handleKeyDown = (event) => {
    if (user.current.value === "" || event.key !== "Enter") {
      return;
    }
    updateUsername(user.current.value);
    instance
      .get(`https://api.github.com/users/${user.current.value}/gists`)
      .then((response) => {
        updateGists(response.data);
      });
  };

  return (
    <div className={classes.SearchBar}>
      <div className={classes.SearchContent}>
        <p>GistSearch</p>
        <input
          onKeyDown={(event) => handleKeyDown(event)}
          ref={user}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
