import React from "react";
import cl from "classnames";
import section from "./section.module.scss";
const Section = ({ children, className }) => {
	return (
		<section className={cl(className, section.section)}>{children}</section>
	);
};

export default Section;
