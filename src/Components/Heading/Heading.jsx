import React from "react";
import heading from "./heading.module.scss";
import cl from "classnames";
const Heading = ({
	level,
	role = "heading",
	weight = "semibold",
	children,
	className,
	background,
}) => {
	if (level === "h2") {
		return (
			<h2
				role={role}
				className={cl(heading.h2, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h2>
		);
	}
	if (level === "h3") {
		return (
			<h3
				role={role}
				className={cl(heading.h3, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h3>
		);
	}

	if (level === "h4") {
		return (
			<h4
				role={role}
				className={cl(heading.h4, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h4>
		);
	}

	if (level === "h5") {
		return (
			<h5
				role={role}
				className={cl(heading.h5, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h5>
		);
	}

	if (level === "h6") {
		return (
			<h6
				role={role}
				className={cl(heading.h6, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h6>
		);
	}

	if (level === "h7") {
		return (
			<h6
				role={role}
				className={cl(heading.h7, heading.heading, className)}
				style={{ fontWeight: weight, backgroundColor: background }}
			>
				{children}
			</h6>
		);
	}

	return (
		<h2
			role={role}
			className={cl(heading.h2, heading.heading, className)}
			style={{ fontWeight: weight, backgroundColor: background }}
		>
			{children}
		</h2>
	);
};

export default Heading;

