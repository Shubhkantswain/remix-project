/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    server: process.env.NODE_ENV === "development" ? undefined : "@remix-run/netlify",
    ignoredRouteFiles: ["**/.*"],
  };
  