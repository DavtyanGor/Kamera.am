import React, { useState, useEffect, useContext } from "react";
import section from "../../Components/Section/section.module.scss";
import { client } from "./../../../client";
import Spinner from "./../../Components/Spinner/Spinner";
import HomeContent from "./../../Components/HomeContent/HomeContent";
import { dataContext } from "./../../Base";
import Meta from "./../../Components/Meta/Meta";
import Slide1 from "./../../Components/Sliders/Slide1/Slide1";
import { Slide2 } from "./../../Components/Sliders/Slide2/Slide2";
import Heading from "../../Components/Heading/Heading.jsx";
import Layout from "./../../Components/Layout/Layout";
import useLocalStorage from "../../Hooks/useLocalStorage";
const Home = ({ products, setProducts }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const {
		allProducts,
		setAllProducts,
		setSuperlativeProducts,
		superlativeProducts,
	} = useContext(dataContext);

	const getAllProducts = async (customQuery = "", setProducts) => {
		setIsLoading(true);
		const query = `{
				"products":*[_type == "products" ${customQuery}] [0...10] | order(name desc){
					name,
					published,
					'image':image.asset._ref,
					'caption':image.caption,
					'attribution':image.attribution,
					'slug':slug.current,
					_id,
					isLiked,
					genre,
					price,
					type,
				
				}
		}`;
		try {
			const { products } = await client.fetch(query);
			setProducts([...products]);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(true);
		}
	};
	useEffect(() => {
		getAllProducts("", setAllProducts);
		getAllProducts(` && "lens" in categories[]->title`, setSuperlativeProducts);
	}, []);

	if (
		isLoading &&
		(allProducts.length === 0 || superlativeProducts.length === 0)
	)
		return <Spinner />;
	if (isError)
		return (
			<Heading level={"h5"} className={"text-center my-2 py-2  px-1 mx-1"}>
				was happend error on loading products{" "}
			</Heading>
		);
	return (
		<>
			<Meta name={"Kamera.am - Home"} />
			<section>
				<Slide1 />
				<Slide2 />
			</section>
			<Layout>
				<section className={section.mainSection}>
					<HomeContent
						products={products}
						setProducts={setProducts}
						heading={"Lense's"}
						count={2}
						section={section}
						Products={superlativeProducts}
					/>
					<HomeContent
						products={products}
						setProducts={setProducts}
						heading={"Superlative products"}
						count={1}
						section={section}
						Products={allProducts}
					/>
				</section>
			</Layout>
		</>
	);
};
export default Home;
