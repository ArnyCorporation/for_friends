import { connect } from 'react-redux';
import { setFilter, getSearchResults } from '../../../engine/core/Giphy/actions';
import Filters from './Filters';

const mapDispatchToProps = {
  setFilter,
  getSearchResults,
};

export default connect(
  null,
  mapDispatchToProps,
)(Filters);
