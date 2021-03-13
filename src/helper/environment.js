export function getHostName() {
  if (process.env.HOST_NAME) return process.env.HOST_NAME;
  else {
    return "http://localhost:3000";
  }
}
