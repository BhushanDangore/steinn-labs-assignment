import React, { useEffect } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import Grid from "../../components/Miniatures/Grid";
import Pagination from "../../components/Pagination";
import { useStoreContext } from "../../store";
import { getNewReleases } from "../../store/actions";

export default function NewRelease() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    if (!state.NewReleases) getNewReleases().then(dispatch);
    // eslint-disable-next-line
  }, []);

  const loadMore = (offset, limit) => {
    getNewReleases({ offset, limit }).then(dispatch);
  };

  const { NewReleases } = state;

  return (
    <div className="main-content">
      <DiscoverHeader title="New Released" />
      {NewReleases && (
        <Grid items={Object.values(NewReleases)} title="Released This Week" />
      )}
      <Pagination loadMore={loadMore} />
    </div>
  );
}
