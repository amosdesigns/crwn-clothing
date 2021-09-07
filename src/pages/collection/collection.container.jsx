import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinnner.component";
import CollectionPage from "../collection/collection.component";

const mapStateToProps = createStructuredSelector({
  IsLoading: (state) => !selectIsCollectionsLoaded(state),
});
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
