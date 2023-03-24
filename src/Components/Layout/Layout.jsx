import React from "react";
import layout from "./layout.module.scss";
const Layout = ({ children }) => {
	return <div className={layout.Layout}>{children}</div>;
};

export default Layout;
