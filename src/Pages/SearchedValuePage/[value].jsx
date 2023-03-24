import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../../client.js";
import section from "../../Components/Section/section.module.scss";
import ProductContainer from "../../Components/ProductContainer/ProductContainer.jsx";
import Heading from "../../Components/Heading/Heading.jsx";
import CallPagination from "../../Components/CallPagination/CallPagination.jsx";
import Spinner from "../../Components/Spinner/Spinner.jsx";
import Layout from "./../../Components/Layout/Layout";
import Product from "../../Components/Product/Product.jsx";
function Value({ products, setProducts }) {
	const [searchedValue, setSearchedValue] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [isErr, setIsErr] = useState(false);
	const [productPerPage] = useState(20);
	const { value } = useParams();
	async function getSearchedProducts() {
		setIsLoading(true);
		const query = `
			*[_type == "products" && search.current match "${value}*"]{
				  _id,
				 'image': image.asset._ref,
				  name,
				  price,
				 'slug':slug.current,
				 'caption':image.caption,
				 'attribution':image.asset.attribution,				 
				  genre,
				  type
			}`;
		try {
			const result = await client.fetch(query);
			setSearchedValue(result);
			setIsLoading(false);
		} catch (err) {
			setIsErr(true);
			setIsLoading(false);
			console.error(err);
		}
	}
	useEffect(() => {
		getSearchedProducts();
	}, [value]);

	const indexOfLastProducts = currentPage * productPerPage;
	const indexOfFirstProducts = indexOfLastProducts - productPerPage;
	const currentProducts = searchedValue.slice(
		indexOfFirstProducts,
		indexOfLastProducts
	);
	if (isErr)
		return (
			<Heading level={"h5"} className={"text-center my-2 py-2  px-1 mx-1"}>
				was happend error on loading products{" "}
			</Heading>
		);
	if (isLoading) return <Spinner />;
	if (!isLoading && searchedValue.length === 0)
		return (
			<Heading level={"h5"} className={"text-center my-2 py-2  px-1 mx-1"}>
				Sorry but products not found...
			</Heading>
		);
	return (
		<Layout>
			<section className={section.mainSection}>
				<ProductContainer>
					{searchedValue &&
						currentProducts?.map((product) => (
							<Product
								products={products}
								setProducts={setProducts}
								key={product._id}
								{...product}
							/>
						))}
				</ProductContainer>
				<CallPagination
					length={searchedValue.length}
					productPerPage={productPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</section>
		</Layout>
	);
}

export default Value;
