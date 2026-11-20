import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import App from "./App.jsx";
import "./index.css";

// Let Helmet replace prerendered SEO tags during route changes instead of
// appending another canonical/description beside the server-rendered fallback.
document.head.querySelectorAll('link[rel="canonical"], meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => {
  tag.setAttribute("data-rh", "true");
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
