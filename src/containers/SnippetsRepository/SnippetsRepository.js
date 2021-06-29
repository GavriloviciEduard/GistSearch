import React from 'react';
import GistsGridList from '../../components/GistsGridList/GistsGridList';
import SearchBar from '../../components/SearchBar/SearchBar';
import classes from './SnippetsRepository.css';

const SnippetsRepository = () => (
  <div className={classes.SnippetsRepository}>
    <div className={classes.SearchBar}>
      <SearchBar />
    </div>
    <div className={classes.GistsGridList}>
      <GistsGridList />
    </div>
  </div>
);

export default SnippetsRepository;
