import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsPage from "../collectionpage/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectCollectionIsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionsPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;

    fetchCollections();
  }
  render() {
    const { match, isFetching, isCollectionsLoaded } = this.props;
    console.log(isFetching);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionsLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectCollectionIsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
