import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";

const Shop = ({ match }) => (
  <div className="show-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default Shop;
