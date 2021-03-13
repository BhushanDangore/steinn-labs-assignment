import axios from "axios";
import {
  SET_FEATURED_PLAYLIST,
  SET_GENRES,
  SET_NEW_RELEASES,
  SET_TOKEN,
} from "../types";

// Action creators

export function getNewReleases({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url =
    "https://api.spotify.com/v1/browse/new-releases?" + params.toString();

  return axios
    .get(url)
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

export function getFeaturedPlaylists({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url =
    "https://api.spotify.com/v1/browse/featured-playlists?" + params.toString();

  return axios
    .get(url)
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

export function getGenres({ limit = 10, offset = 0 } = {}) {
  let params = new URLSearchParams({ limit, offset });

  params.set("limit", limit);
  params.set("offset", offset);

  const url =
    "https://api.spotify.com/v1/browse/categories?" + params.toString();

  return axios
    .get(url)
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

export function setTokenAction(token) {
  return { type: SET_TOKEN, payload: token };
}
