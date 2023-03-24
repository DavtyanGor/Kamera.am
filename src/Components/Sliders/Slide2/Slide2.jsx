import React, { useContext, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./_slide2.scss";
import categoriesSlider from "./categoriesSlider.module.scss";
import { client, urlFor } from "../../../../client.js";
import Spinner from "../../Spinner/Spinner.jsx";
import { dataContext } from "./../../../Base";

export const Slide2 = () => {
	const [categoriesSlides, setCategoriesSlides] = useState([]);
	const { lang } = useContext(dataContext);
	async function getCategoriesSlides() {
		const query = `
			*[_type == "category_link"]{
				'id':_id,
				title_hy,
				title_en,
				title_ru,
				'link_slug':link_slug.current,
				'link_image':link_image.asset._ref
			}
		`;
		const categoriesSlides = await client.fetch(query);
		setCategoriesSlides(categoriesSlides);
	}
	useEffect(() => {
		getCategoriesSlides();
	}, []);
	if (categoriesSlides.length <= 0) {
		return <Spinner />;
	}
	return (
		<div className="slider2__container ">
			<Splide
				className="slider2__splide"
				aria-label="My Favorite Images"
				options={{
					rewind: true,
					width: "100vw",
					height: "100px",
					padding: 0,
					autoHeight: true,
					pagination: false,
					perPage: 6,
					type: "loop",
				}}
			>
				{categoriesSlides &&
					categoriesSlides?.map(
						({ title_ru, title_en, title_hy, link_image, link_slug, id }) => (
							<SplideSlide key={id} className={categoriesSlider.splide}>
								<a
									href={`/categories/${link_slug}`}
									className={categoriesSlider.link}
								>
									<div className={categoriesSlider.iamgeContainer}>
										<img
											className={categoriesSlider.image}
											src={urlFor(link_image).auto("format")}
											title={
												lang === "hy"
													? title_hy
													: lang === "en"
													? title_en
													: lang === "ru"
													? title_ru
													: title_hy
											}
											alt={
												lang === "hy"
													? title_hy
													: lang === "en"
													? title_en
													: lang === "ru"
													? title_ru
													: title_hy
											}
										/>
									</div>
									<h3 className={`${categoriesSlider.title} ${title_en.length > 13?"text-sm":title_ru.length > 13 ?"text-sm":title_hy.length>13?"text-sm":""}`}>
										{lang === "hy"
											? title_hy
											: lang === "en"
											? title_en
											: lang === "ru"
											? title_ru
											: title_hy}
									</h3>
								</a>
							</SplideSlide>
						)
					)}
			</Splide>
		</div>
	);
};

