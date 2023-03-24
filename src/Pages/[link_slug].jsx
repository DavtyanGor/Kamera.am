import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../client.js";
import ProductContainer from "../Components/ProductContainer/ProductContainer.jsx";
import Pagination from "../Components/Pagination/Pagination.jsx";
import section from "../Components/Section/section.module.scss";
import Spinner from "../Components/Spinner/Spinner.jsx";
import CallPagination from "../Components/CallPagination/CallPagination.jsx";
import Heading from "../Components/Heading/Heading.jsx";
import Layout from "../Components/Layout/Layout.jsx";
import Product from "../Components/Product/Product.jsx";
function CategoryPage({ products, setProducts }) {
	const [categoryDatas, setCategoryDatas] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [isErr, setIsErr] = useState(false);
	const [productPerPage] = useState(10);
	const { link_slug } = useParams();
	async function getCategoryDatas() {
		setIsLoading(true);
		const query = `
			*[_type == "products" &&  "${link_slug}" in categories[]->title]{
				_id,
				name,
				'image':image.asset._ref,
				'caption':image.caption,
				'attribution':image.attribution,
				price,
				'slug': slug.current,
				type,
				genre
			}
		`;
		try {
			const categoryDatas = await client.fetch(query);
			setCategoryDatas(categoryDatas);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			setIsLoading(false);
			setIsErr(true);
		}
	}
	useEffect(() => {
		getCategoryDatas();
	}, []);
	const indexOfLastProducts = currentPage * productPerPage;
	const indexOfFirstProducts = indexOfLastProducts - productPerPage;
	const currentProducts = categoryDatas.slice(
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
	if (
		categoryDatas.length === 0 ||
		!currentProducts ||
		currentProducts.length === 0
	) {
		return (
			<Heading level={"h5"} className={"text-center my-2 py-2  px-1 mx-1"}>
				Sorry but products not found...
			</Heading>
		);
	}
	return (
		<Layout>
			<section className={section.mainSection}>
				<ProductContainer>
					{currentProducts?.map((product) => (
						<Product
							key={product._id}
							products={products}
							setProducts={setProducts}
							{...product}
						/>
					))}
				</ProductContainer>
				<CallPagination
					length={categoryDatas.length}
					productPerPage={productPerPage}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</section>
		</Layout>
	);
}

export default CategoryPage;
