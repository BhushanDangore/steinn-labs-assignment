export function getHostName() {
  if (process.env.HOST) return process.env.HOST;
  else {
    return "http://localhost:3000";
  }
}
