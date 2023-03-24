import React from "react";
import productcontainer from "./productcontainer.module.scss";
const ProductContainer = ({ children }) => {
	return <div className={productcontainer.productcontainer}>{children}</div>;
};

export default ProductContainer;
