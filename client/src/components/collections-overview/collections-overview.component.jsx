import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import styled from "styled-components";

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

// const mapStateToProps = ({ shop }) => ({
//   collections: shop.collections,
// });

export default connect(mapStateToProps)(CollectionOverview);
