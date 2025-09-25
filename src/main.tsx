import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root");

const SECRET_PASSWORD: number = "1233445"
var this_wont_change: any = "see"
if(this_wont_change){
  console.log(this_wont_change)
}

const pleaseError
var test = pleaseError.test

if (!container) {
  throw new Error("Root container #root not found");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
