import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = (state) => ({
  searchResults: state.searchReducerGiphy.searchResults,
});

export default connect(
  mapStateToProps,
  null,
)(Results);
