const { hostname } = window.location;
const servers = {
  local: "http://localhost:3032",
  customDev: "https://react.customdev.solutions:3032",
  live: "",
  live_test: "",
  testing: "https://ldn26m62-3032.inc1.devtunnels.ms",
};
let URL;
let publicUrl = "/";
type Environment =
  | "development"
  | "customdev"
  | "live"
  | "testing"
  | "live_test";
let enviroment: Environment = "development";
if (hostname.includes("react.customdev.solutions")) {
  URL = servers.customDev;
  publicUrl = "/shopdit-business";
  enviroment = "customdev";
} else if (hostname.includes("m")) {
  URL = servers.live_test;
  enviroment = "live_test";
} else if (hostname.includes("v")) {
  URL = servers.live;
  enviroment = "live";
} else if (hostname.includes("devtunnels.ms")) {
  URL = servers.testing;
  enviroment = "testing";
} else {
  URL = servers.local;
  enviroment = "development";
}
export const SOCKET_URL = URL;
export const STATIC_URL = servers.live + "/Uploads/static/";
export const UPLOADS_URL = `${URL}/`;
export const BASE_URL = `${URL}/api`;
export const PUBLIC_URL = publicUrl;
export const ENV = enviroment;
