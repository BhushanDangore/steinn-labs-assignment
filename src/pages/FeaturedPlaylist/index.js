import React, { useEffect } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import { getFeaturedPlaylists } from "../../store/actions";
import { useStoreContext } from "../../store";
import Grid from "../../components/Miniatures/Grid";

export default function FeaturedPlaylist() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    if (!state.FeaturedPlaylist) getFeaturedPlaylists().then(dispatch);
  }, []);

  const { FeaturedPlaylist } = state;

  return (
    <div className="main-content">
      <DiscoverHeader />
      {FeaturedPlaylist && (
        <Grid
          items={Object.values(FeaturedPlaylist)}
          title="Released This Week"
        />
      )}
    </div>
  );
}
