import React from "react";
import searchItem from "./searchItem.module.sass";
import { urlFor } from "../../../client.js";
import cl from "classnames";
function SearchedItem({ name, image, slug, type, price, genre }) {
	return (
		<li className={searchItem.item}>
			<a
				href={`/products/${genre}/${type}/${slug}`}
				className={searchItem.link}
			>
				<div className={searchItem.itemImage}>
					<img src={urlFor(image).url()} alt={name} title={name} />
				</div>
				<div className={searchItem.info}>
					<h5
						className={cl(
							searchItem.name,
							name.length > 13 ? "text-sm" : "text-base"
						)}
					>
						{name}
					</h5>
					<h6 className={searchItem.price}>{price} AMD</h6>
				</div>
			</a>
		</li>
	);
}

export default SearchedItem;
