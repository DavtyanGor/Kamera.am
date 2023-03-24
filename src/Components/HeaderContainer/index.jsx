import React from "react";
import { HeaderTop } from "./headerTop/HeaderTop";
import { Header } from "./header/Header";
import { HeaderBottom } from "./headerBottom/HeaderBottom";
const HeaderContainer = () => {
	return (
		<div style={{background : '#1C1C1C'}}>
			<HeaderTop />
			<Header />
			<HeaderBottom />
		</div>
	);
};

export default HeaderContainer;
