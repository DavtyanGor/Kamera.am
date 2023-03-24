import React from "react";
import product from "./product.module.scss";
import { Link } from "react-router-dom";
import { urlFor } from "../../../client";
import { BsBasket2Fill, BsFillHeartFill } from "react-icons/bs";
import cl from "classnames";
import useLocalStorage from "./../../Hooks/useLocalStorage";
const Product = ({
	_id,
	type,
	genre,
	name,
	slug,
	price,
	caption,
	attribution,
	image,
	products,
	setProducts,
}) => {
	const [forLiked, setForLiked] = useLocalStorage(_id, false);
	const onCLick = () => {
		setForLiked(!forLiked);
		if (!forLiked) {
			setProducts([...products, { _id, forLiked: !forLiked }]);
		} else {
			setProducts(products.filter((p) => p._id !== _id));
		}
	};
	return (
		<div className={product.product}>
			<Link to={`/products/${genre}/${type}/${slug}`}>
				<div className={product.imgContainer}>
					<img
						className={product.img}
						src={urlFor(image).url()}
						alt={attribution}
						title={caption}
					/>
				</div>
			</Link>
			<div className={product.fields}>
				<span className={product.type}>{type}</span>
				<h3 className={product.name}>
					<span className={`${name.length >= 15 ? "text-sm" : ""}`}>
						{name}
					</span>
				</h3>
				<h4 className={product.price}>{price} AMD</h4>
			</div>
			<div className={product["pricingFields"]}>
				<button
					type="button"
					onClick={onCLick}
					className={cl(forLiked ? product.like : "", product.likeButton)}
				>
					<BsFillHeartFill />
				</button>
				<Link
					to={`/products/${genre}/${type}/${slug}`}
					className={product.buyButton}
				>
					Buy
					<BsBasket2Fill />
				</Link>
			</div>
		</div>
	);
};

export default Product;
