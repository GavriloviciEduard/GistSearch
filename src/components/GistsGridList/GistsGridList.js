import React from 'react';
import Gist from '../Gist/Gist';
import classes from './GistsGridList.css';
import { useGlobalContext } from '../../context';
require('datejs');

const GistsGridList = () => {
  const { gists } = useGlobalContext();

  const getFilesInfo = (files) => {
    const filesInfo = [];
    Object.keys(files).forEach((key) => {
      filesInfo.push({
        url: files[key].raw_url,
        filename: files[key].filename,
        language: files[key].language,
        raw_url: files[key].raw_url,
      });
    });

    return filesInfo;
  };

  return (
    <div className={classes.GistList}>
      {gists.map((item, index) => {
        return (
          <Gist
            key={index}
            ownerImageSrc={item.owner.avatar_url}
            ownerHtmlUrl={item.owner.html_url}
            title={
              item.description !== "" ? item.description : "No description"
            }
            htmlUrl={item.html_url}
            createDate={Date.parse(item.created_at).toString(
              "dd.MM.yyyy HH:mm"
            )}
            updateDate={Date.parse(item.updated_at).toString(
              "dd.MM.yyyy HH:mm"
            )}
            files={getFilesInfo(item.files)}
            forksUrl={item.forks_url}
          ></Gist>
        );
      })}
    </div>
  );
};

export default GistsGridList;
