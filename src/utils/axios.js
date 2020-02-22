import axios from "axios";

let baseURL;
// const apiVersion = "v1";

const hostname = window && window.location && window.location.hostname;

if (hostname === "fundopolis.com") {
  baseURL = "https://prod.fundopolis.com/api";
} else if (hostname === "admin.dev.fundopolis.com ") {
  baseURL = "https://dev.fundopolis.com/api";
} else if (/^qa/.test(hostname)) {
  baseURL = `https://api.${hostname}`;
} else {
  baseURL = process.env.REACT_APP_BACKEND_HOST || "http://localhost:3000";
}

export default axios.create({
  baseURL: baseURL,
  responseType: "json"
});
