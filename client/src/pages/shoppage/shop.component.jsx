import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsPageContainer from "../collectionpage/collection.container";
import Spiner from '../../components/spinner/spiner'
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// const CollectionsOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview.container"))
// const CollectionsPageContainer = lazy(() => import("../collectionpage/collection.container"))

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      {/* <Suspense fallback={<Spiner />}> */}
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
        />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer}
        />
        {/* </Suspense> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
