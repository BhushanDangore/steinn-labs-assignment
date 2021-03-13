import {
  SET_FEATURED_PLAYLIST,
  SET_GENRES,
  SET_NEW_RELEASES,
  SET_TOKEN,
} from "../types";

// Reducer
export default function storeReducer(state, action) {
  switch (action.type) {
    case SET_NEW_RELEASES: {
      let newState = { ...state };
      newState.NewReleases = action.payload
        ? action.payload.reduce((acc, val) => {
            acc[val.id] = {
              name: val.name,
              image: val.images[0].url,
            };
            return acc;
          }, {})
        : false;

      newState.NewReleases = {
        ...state.NewReleases,
        ...newState.NewReleases,
      };

      return newState;
    }

    case SET_FEATURED_PLAYLIST: {
      let newState = { ...state };
      newState.FeaturedPlaylist = action.payload
        ? action.payload.reduce((acc, val) => {
            acc[val.id] = {
              name: val.name,
              image: val.images[0].url,
            };
            return acc;
          }, {})
        : false;

      newState.FeaturedPlaylist = {
        ...state.FeaturedPlaylist,
        ...newState.FeaturedPlaylist,
      };

      return newState;
    }

    case SET_GENRES: {
      let newState = { ...state };
      newState.Genres = action.payload
        ? action.payload.reduce((acc, val) => {
            acc[val.id] = {
              name: val.name,
              image: val.icons[0].url,
            };
            return acc;
          }, {})
        : false;

      newState.Genres = {
        ...state.Genres,
        ...newState.Genres,
      };

      return newState;
    }

    case SET_TOKEN: {
      let newState = { ...state };
      newState.token = action.payload;
      return newState;
    }

    default:
      console.log(action);
      console.error(new Error("Invalid Action", action));
      return state;
  }
}
