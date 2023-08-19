import React from "react";
import ReactDOMClient from "react-dom/client";
import { SecondPage } from "./screens/SecondPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SecondPage />);
