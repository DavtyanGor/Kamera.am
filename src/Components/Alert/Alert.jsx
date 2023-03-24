import React from "react";
import alert from "./alert.module.scss";

const Alert = ({ children, side = "right bottom", isVisible = false }) => {
	const leftBottom = "left bottom";
	const rightBottom = "right bottom";
	const leftTop = "left top";
	const rightTop = "right top";
	const className =
		side === leftBottom
			? alert.LeftBottom
			: side === rightBottom
			? alert.RightBottom
			: side === leftTop
			? alert.LeftTop
			: side === rightTop
			? alert.RightTop
			: alert.LeftBottom;
	return (
		<div
			className={`${alert.alertContainer} ${className} ${
				isVisible ? "visible" : "invisible"
			} ${isVisible ? alert.visible : ""}`}
		>
			{children}
		</div>
	);
};

export default Alert;
