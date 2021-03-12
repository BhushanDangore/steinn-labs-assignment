import Home from "./pages/Home";
import NewRelease from "./pages/NewRelease";
import FeaturedPlaylist from "./pages/FeaturedPlaylist";
import BrowseGenres from "./pages/BrowseGenres";

// Icon
import HomeIcon from "./assets/icons/headphone.svg";
import NewReleaseIcon from "./assets/icons/play.svg";
import FeaturedPlaylistIcon from "./assets/icons/menu.svg";
import BrowseGenresIcon from "./assets/icons/tune.svg";

const routes = [
  {
    name: "Discover",
    path: "/",
    component: Home,
    exact: true,
    icon: HomeIcon,
  },
  {
    name: "New Release",
    path: "/new-releases",
    component: NewRelease,
    exact: true,
    icon: NewReleaseIcon,
  },
  {
    name: "Featured Playlist",
    path: "/featured-playlists",
    component: FeaturedPlaylist,
    exact: true,
    icon: FeaturedPlaylistIcon,
  },
  {
    name: "Browse Genres",
    path: "/categories",
    component: BrowseGenres,
    exact: true,
    icon: BrowseGenresIcon,
  },
];

export default routes;
