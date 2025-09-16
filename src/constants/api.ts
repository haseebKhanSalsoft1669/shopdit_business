const { hostname } = window.location;

const servers = {
  local: "http://localhost:3032",
  customDev: "https://react.customdev.solutions:3032",
  live: "",
  dummy: "https://9d2f-204-157-158-10.ngrok-free.app",
};


let URL;

if (hostname.includes("react.customdev.solutions")) {
  URL = servers.customDev;
} else if (hostname.includes("")) {
  URL = servers.live;
} else if (hostname.includes("devtunnels.ms")) {
  URL = servers.dummy;
} else {
  URL = servers.local;
}

export const SOCKET_URL = URL;
export const UPLOADS_URL = `${URL}/`;
export const BASE_URL = `${URL}/api`;