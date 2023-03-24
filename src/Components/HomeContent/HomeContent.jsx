import React from "react";
import Section from "./../Section/Section";
import Heading from "./../Heading/Heading";
import ProductContainer from "./../ProductContainer/ProductContainer";
import Product from "../Product/Product.jsx";
const HomeContent = ({ section, Products, heading, products, setProducts }) => {
	return (
		<>
			<Section className={`${section.section} px-0`}>
				<Heading
					weight={300}
					level={"h7"}
					className={"py-2 my-1"}
					background={"white"}
				>
					{heading}
				</Heading>
				<ProductContainer>
					{Products &&
						Products?.map((product) => (
							<Product
								products={products}
								setProducts={setProducts}
								key={product._id}
								{...product}
							/>
						))}
				</ProductContainer>
			</Section>
		</>
	);
};
export default HomeContent;
