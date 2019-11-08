import { connect } from 'react-redux';
import Search from './Search';
import { getSearchResults } from './redux/actions';

const mapDispatchToProps = {
  getSearchResults,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
