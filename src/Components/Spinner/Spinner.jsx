import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spinner = () => {
	return (
		<MutatingDots
			height="100"
			width="100"
			color="#2212ff"
			secondaryColor="#2212ff"
			radius="14.5"
			ariaLabel="mutating-dots-loading"
			wrapperClass="loader-sPinner"
			visible={true}
		/>
	);
};

export default Spinner;
