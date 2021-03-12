import axios from "axios";
import { SET_FEATURED_PLAYLIST, SET_GENRES, SET_NEW_RELEASES } from "../types";
import { SPOTIFY_API_TOKEN } from "../../constants";

// Action creators
export function getNewReleases(tracks) {
  return axios
    .get("https://api.spotify.com/v1/browse/new-releases", {
      headers: {
        Authorization: "Bearer " + SPOTIFY_API_TOKEN,
      },
    })
    .then((res) => {
      return {
        type: SET_NEW_RELEASES,
        payload: res.data?.albums?.items || false,
      };
    })
    .catch((err) => {
      return { type: SET_NEW_RELEASES, payload: false };
    });
}

export function getFeaturedPlaylists(playlists) {
  return axios
    .get("https://api.spotify.com/v1/browse/featured-playlists", {
      headers: {
        Authorization: "Bearer " + SPOTIFY_API_TOKEN,
      },
    })
    .then((res) => {
      return {
        type: SET_FEATURED_PLAYLIST,
        payload: res.data?.playlists?.items || false,
      };
    })
    .catch((err) => {
      return { type: SET_FEATURED_PLAYLIST, payload: false };
    });
}

export function getGenres(genres) {
  return axios
    .get("https://api.spotify.com/v1/browse/categories", {
      headers: {
        Authorization: "Bearer " + SPOTIFY_API_TOKEN,
      },
    })
    .then((res) => {
      return {
        type: SET_GENRES,
        payload: res.data?.categories?.items || false,
      };
    })
    .catch((err) => {
      return { type: SET_GENRES, payload: false };
    });
}
