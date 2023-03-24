import React from "react";
import ReactDOM from "react-dom/client";
import Base from "./Base";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("__kameraam")).render(
	<BrowserRouter>
		<Base />
	</BrowserRouter>
);
