import React from 'react';
import './Filters.scss';
import { Button } from '../../../styledComponents/styles';

const Filters = ({ getSearchResultsSpoon }) => (
  <div className="filter-spoon">
    <Button
      className="filter-spoon__button"
      href="#"
      onClick={() => getSearchResultsSpoon()}
    >
          Random
    </Button>
  </div>
);
export default Filters;
