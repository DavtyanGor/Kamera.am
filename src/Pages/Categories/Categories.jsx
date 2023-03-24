import React, { useEffect, useState } from "react";
import categoiesStyles from "./categories.module.scss";
import Heading from "./../../Components/Heading/Heading";
import { client, urlFor } from "./../../../client";
import Spinner from "../../Components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isErr, setIsErr] = useState(false);
	async function getCategories() {
		setIsLoading(true);
		try {
			const query = `*[_type == "category_link"]{
				'hy':title_hy,
				'en':title_en,
				'ru':title_ru,
				'id':_id,
				'image':link_image.asset._ref,
				'link_slug': link_slug.current
			}`;
			const data = await client.fetch(query);
			setCategories(data);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
			setIsErr(true);
		}
	}
	useEffect(() => {
		getCategories();
	}, []);
	if (isLoading) return <Spinner />;
	if (!isLoading && isErr) return <Heading>Categoies not found</Heading>;
	return (
		<section className={categoiesStyles.categoriesSection}>
			<Heading level={"h3"} weight={"semibold"}>
				Categories
			</Heading>
			<div className={categoiesStyles.categoryContainer}>
				{categories &&
					categories?.map(({ id, hy, en, ru, link_slug, image }) => (
						<Link
							to={`/categories/${link_slug}`}
							key={id}
							className={categoiesStyles.card}
						>
							<img
								width={45}
								height={45}
								src={urlFor(image).url()}
								alt={en}
								title={en}
							/>
							<Heading
								level={"h7"}
								className={en.length >= 10 ? "text-base" : ""}
							>
								{en}
							</Heading>
						</Link>
					))}
			</div>
		</section>
	);
};
export default Categories;

