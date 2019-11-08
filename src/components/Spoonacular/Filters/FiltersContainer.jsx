import { connect } from 'react-redux';
import { getSearchResultsSpoon } from '../../../engine/core/Spoonacular/actions';
import Filters from './Filters';

const mapDispatchToProps = {
  getSearchResultsSpoon,
};

export default connect(
  null,
  mapDispatchToProps,
)(Filters);
