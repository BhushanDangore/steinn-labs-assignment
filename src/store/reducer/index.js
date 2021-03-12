import { SET_FEATURED_PLAYLIST, SET_GENRES, SET_NEW_RELEASES } from "../types";

// Reducer
export default function storeReducer(state, action) {
  switch (action.type) {
    case SET_NEW_RELEASES: {
      let newState = { ...state };
      newState.NewReleases = action.payload
        ? action.payload.reduce((acc, val) => {
            console.log(val);
            acc[val.id] = {
              name: val.name,
              image: val.images[0].url,
            };
            return acc;
          }, {})
        : false;

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

      return newState;
    }

    case SET_GENRES: {
      console.log(action);
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

      return newState;
    }

    default:
      console.log(action);
      console.error(new Error("Invalid Action", action));
      return state;
  }
}
