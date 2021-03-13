export function getToken() {
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  window.location.hash = "";

  let _token = hash.access_token;

  if (_token) {
    return _token;
  }
  return false;
}
