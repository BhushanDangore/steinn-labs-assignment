import React, { createContext, useReducer, useContext } from "react";

import storeReducer from "./reducer";

export const StoreContext = createContext();

// Initial state
const initialState = {
  NewReleases: null,
  FeaturedPlaylist: null,
  Genres: null,
};

function StoreProvider(props) {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }} {...props} />;
}

function useStoreContext() {
  return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };
