export function getHostName() {
  if (process.env.NODE_ENV === "production")
    return "https://steinn.herokuapp.com/";
  return "http://localhost:3000";
}
