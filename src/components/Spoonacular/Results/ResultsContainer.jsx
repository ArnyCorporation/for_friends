import { connect } from 'react-redux';
import Results from './Results';

const mapStateToProps = (state) => ({
  searchResults: state.searchReducerSpoonacular.searchResultsSpoon,
});


export default connect(
  mapStateToProps,
  null,
)(Results);
