import React from 'react';
import {BiSearch} from "react-icons/bi";

function SearchingButton({value}) {
	return (
		<a href={`/search/${value}`} tabIndex="2">
			<BiSearch size={26} color={"#0c34f1"} />
		</a>
	);
}

export default SearchingButton;