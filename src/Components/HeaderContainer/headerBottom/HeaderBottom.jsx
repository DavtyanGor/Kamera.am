import React, { useContext, useEffect, useState } from "react";
import "./_headerBottom.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { client } from "../../../../client.js";
import Spinner from "../../Spinner/Spinner.jsx";
import { Link } from "react-router-dom";
import { dataContext } from "../../../Base";

export const HeaderBottom = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [categories, setCategories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { lang } = useContext(dataContext);
	async function getCategories() {
		setIsLoading(true);
		const query = `
      *[_type == "category_link"]{
        'id':_id,
        title_hy,
        title_ru,
        title_en,
        'link_slug':link_slug.current
      }
    `;
		try {
			const categories = await client.fetch(query);
			setCategories(categories);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			setIsLoading(false);
		}
	}
	useEffect(() => {
		getCategories();
	}, []);

	if (isLoading) return <Spinner />;
	return (
		<div className="header__bottom">
			<nav className="header__bottom-nav">
				<ul className="header__bottom-list">
					<li className="hidden-menu-container">
						<Link className="open-menu" to={"/categories"}>
							{lang === "en"
								? "Categories"
								: lang === "ru"
								? "Категории"
								: lang === "hy"
								? "Կատեգորիաներ"
								: "Կատեգորիաներ"}
						</Link>
						<GiHamburgerMenu
							className={
								!openMenu
									? "header__bottom-burger none "
									: "header__bottom-burger block"
							}
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
						/>
						<MdOutlineClose
							className={
								openMenu
									? "header__burger2 block"
									: "header__bottom-burger none"
							}
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
						/>
						<ul className={"hidden-open-menu"}>
							{categories?.map(
								({ id, title_hy, title_en, title_ru, link_slug }) => {
									return (
										<li key={id}>
											<a href={`/categories/${link_slug}`}>
												{lang === "en"
													? title_en
													: lang === "ru"
													? title_ru
													: lang === "hy"
													? title_hy
													: title_hy}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</li>
					<li>
						<Link className="header__bottom-item bottom-first-item" to="/about">
							{lang === "en"
								? "About us"
								: lang === "ru"
								? "Про нас"
								: lang === "hy"
								? "Մեր մասին"
								: "Մեր մասին"}
						</Link>
					</li>
					<li>
						<a className="header__bottom-item" href="#">
							{lang === "en"
								? "Credit terms"
								: lang === "ru"
								? "Условия кредита"
								: lang === "hy"
								? "Վարկի պայմաններ"
								: "Վարկի պայմաններ"}
						</a>
					</li>
					<li>
						<Link to={"/contacts"} className="header__bottom-item" href="#">
							{lang === "en"
								? "Contacts"
								: lang === "ru"
								? "Контакты"
								: lang === "hy"
								? "Կոնտակտներ"
								: "Կոնտակտներ"}
						</Link>
					</li>
					<li>
						<a className="header__bottom-item bottom-last-item" href="#">
							{lang === "en"
								? "Delivery and payments"
								: lang === "ru"
								? "Доставка и оплата"
								: lang === "hy"
								? "Առաքում և վճարումներ"
								: "Առաքում և վճարումներ"}
						</a>
					</li>
				</ul>
				<div className="header__bottom-fake"></div>
			</nav>
			<div
				className={`${!openMenu ? "burger__menu-close" : "burger__menu-open"} bg-white overflow-scroll`}
			>
				{categories?.map(({ id, title_hy, title_en, title_ru, link_slug }) => {
					return (
						<a key={id} href={`/categories/${link_slug}`}>
							{lang === "en"
								? title_en
								: lang === "ru"
								? title_ru
								: lang === "hy"
								? title_hy
								: title_hy}
						</a>
					);
				})}
			</div>
		</div>
	);
};
