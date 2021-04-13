import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
// import { firestore } from "../../firebase/firebase.utils";

const CollectionsPage = ({ collection }) => {
  // useEffect(() => {
  //   console.log("i am susbribing");
  //   const unsubscribeFromCollections = firestore
  //     .collection("collections")
  //     .onSnapshot((snapshot) => console.log(snapshot));
  //   return () => {
  //     console.log("i am unsubscribing");
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionsPage);
