import React, { useEffect } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import Grid from "../../components/Miniatures/Grid";
import { useStoreContext } from "../../store";
import {
  getNewReleases,
  getFeaturedPlaylists,
  getGenres,
} from "../../store/actions";

export default function Home() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    if (!state.NewReleases) getNewReleases().then(dispatch);
    if (!state.FeaturedPlaylist) getFeaturedPlaylists().then(dispatch);
    if (!state.Genres) getGenres().then(dispatch);
    // eslint-disable-next-line
  }, []);

  const { NewReleases, FeaturedPlaylist, Genres } = state;

  return (
    <div className="main-content">
      <DiscoverHeader title="Discover" />
      {NewReleases && (
        <Grid
          items={Object.values(NewReleases)}
          title="Released This Week"
          inline={true}
        />
      )}
      {FeaturedPlaylist && (
        <Grid
          items={Object.values(FeaturedPlaylist)}
          title="Featured Playlists"
          inline={true}
        />
      )}
      {Genres && (
        <Grid
          items={Object.values(Genres)}
          title="Browse Genres"
          inline={true}
        />
      )}
    </div>
  );
}
