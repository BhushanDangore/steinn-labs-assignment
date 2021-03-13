import React, { useEffect } from "react";

import DiscoverHeader from "../../components/Miniatures/DiscoverHeader";
import Grid from "../../components/Miniatures/Grid";
import { useStoreContext } from "../../store";
import { getGenres } from "../../store/actions";

export default function BrowseGenres() {
  const { state, dispatch } = useStoreContext();

  useEffect(() => {
    if (!state.Genres) getGenres().then(dispatch);
    // eslint-disable-next-line
  }, []);

  const { Genres } = state;

  return (
    <div className="main-content">
      <DiscoverHeader title="Genres" />
      {Genres && <Grid items={Object.values(Genres)} title="Browse Genres" />}
    </div>
  );
}
