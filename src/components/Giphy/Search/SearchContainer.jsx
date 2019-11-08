import { connect } from 'react-redux';
import { getSearchResults, setFilter } from '../../../engine/core/Giphy/actions';
import Search from './Search';

const mapDispatchToProps = {
  setFilter,
  getSearchResults,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
