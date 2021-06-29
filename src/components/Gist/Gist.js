import React, { useState, useEffect } from "react";
import classes from "./Gist.css";
import CodeBlock from "../CodeBlock/CodeBlock";
import axios from "axios";
import { useGlobalContext } from "../../context";

const Gist = (props) => {
  const [forks, setForks] = useState([]);
  
  useEffect(() => {
    axios.get(props.forksUrl).then((response) => {
      setForks(response.data);
    });
  }, [props.forksUrl]);
  const { username } = useGlobalContext();

  return (
    <div className={classes.Gist}>
      <div className={classes.header}>
        <div className={classes.information}>
          <div className={classes.ownerInformation}>
            <a href={props.ownerHtmlUrl}>
              <img src={props.ownerImageSrc} alt="none" />
            </a>
            <p>{username}</p>
          </div>
          <div className={classes.forkInformation}>
            {forks.slice(-3).map((item, index) => {
              return (
                <a key={index} href={item.owner.html_url}>
                  <img src={item.owner.avatar_url} alt="none" />
                </a>
              );
            })}
          </div>
        </div>
        <a href={props.htmlUrl}>
          <h2>{props.title}</h2>
        </a>
        <p>Created at {props.createDate}</p>
        <p>Updated at {props.updateDate}</p>
      </div>
      <div className={classes.snippets}>
        {props.files.map((item, index) => {
          return (
            <CodeBlock
              key={index}
              filename={item.filename}
              language={item.language}
              codeUrl={item.raw_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gist;
