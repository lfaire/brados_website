import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-700.css";
import App from "./App";
import "./styles.css";

const soonPath = `${import.meta.env.BASE_URL}pronta-inauguracion`;
const Page = window.location.pathname.replace(/\/$/, "") === soonPath
  ? AppSoon
  : App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
