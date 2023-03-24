import React, { useContext, useEffect, useState } from "react";
import "./_header.scss";
import h from "./header.module.sass";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { dataContext } from "./../../../Base";
import Modal from "../../Modal/Modal";
import { client } from "../../../../client.js";
import Media from "react-media";
import SearchInput from "../../SearchInput/SearchInput.jsx";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
	const [headerScroll, setHeaderScroll] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [isModal, setIsModal] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);
	const { products, setProducts, isMediaSearch, setIsMediaSearch, lang } =
		useContext(dataContext);
	const [categories, setCategories] = useState([]);
	async function getCategories() {
		const query = `
      *[ _type == "category_link" ]{
        'id' : _id,
        title_hy,
        title_ru,
        title_en,
        'link_slug' : link_slug.current
      }
    `;
		try {
			const categories = await client.fetch(query);
			setCategories(categories);
		} catch (err) {
			console.error(err);
		}
	}
	useEffect(() => {
		getCategories();
	}, []);
	function headerHandleScroll() {
		this.window.scrollY > 40
			? setHeaderScroll(!headerScroll)
			: setHeaderScroll(!headerScroll);
	}
	useEffect(() => {
		window.addEventListener("scroll", headerHandleScroll);
		return () => window.removeEventListener("scroll", headerHandleScroll);
	}, [headerScroll]);

	const likedModalHandle = () => {
		setIsModal(!isModal);
	};
	useEffect(() => {
		if (isModal) {
			window.document.documentElement.style.overflow = "hidden";
			window.document.documentElement.style.paddingRight = "10px";
		} else {
			window.document.documentElement.style.paddingRight = "0";
			window.document.documentElement.style.overflow = "auto";
		}
	}, [isModal]);
	const closeOnGlobal = () => {
		setOpenMenu(false);
	};
	useEffect(() => {
		window.addEventListener("click", closeOnGlobal);
		return () => window.removeEventListener("click", closeOnGlobal);
	}, [openMenu]);
	return (
		<>
			<div className="header__dublikat"></div>
			<div className={window.scrollY > 40 ? "stick" : "header"}>
				<h1 className="header__logo">
					<a href={"/"}>
						<img src="/public/logo.jpg" alt="Logo" />
					</a>
				</h1>
				<div className="header__search-container">
					<div
						className="header__burger-container"
						onClick={(e) => e.stopPropagation()}
					>
						<GiHamburgerMenu
							className={
								!openMenu ? "header__burger block" : "header__burger none"
							}
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
						/>
						<MdOutlineClose
							className={
								openMenu ? "header__burger2 block" : "header__burger none"
							}
							onClick={() => {
								setOpenMenu(!openMenu);
							}}
						/>
					</div>
					<div className="header__search-container2">
						<div className="header__like-container">
							<button type="button" onClick={likedModalHandle}>
								<AiOutlineHeart className="header__like" title="Favorites" />
							</button>
							<sub>{products.length}</sub>
						</div>
						{/*	input search */}
						<Media query={"(min-width: 768px)"}>
							{(matches) =>
								matches ? (
									<SearchInput
										listDiv={h.list}
										searchListDivClassName={h.serchDiv}
									/>
								) : (
									<button
										type={"button"}
										onClick={() => setIsMediaSearch(!isMediaSearch)}
									>
										<BiSearch
											color={"white"}
											title={"open search field"}
											size={24}
											style={{marginRight : '10px', marginTop : '10px'}}
										/>
									</button>
								)
							}
						</Media>
					</div>
				</div>
				<div
					onClick={(E) => E.stopPropagation()}
					className={`${
						!openMenu ? "burger__menu-close" : "burger__menu-open"
					}`}
				>
					{categories &&
						categories?.map(
							({ id, title_hy, title_en, title_ru, link_slug }) => {
								return (
									<a
										onClick={closeOnGlobal}
										href={`/categories/${link_slug}`}
										key={id}
									>
										{lang === "en"
											? title_en
											: lang === "ru"
											? title_ru
											: lang === "hy"
											? title_hy
											: title_hy}
									</a>
								);
							}
						)}
				</div>
				<div
					className={
						openSearch
							? "hidden-search-container block"
							: ".hidden-search-container none"
					}
				>
					<div className="hidden-search-triangle"></div>
					<input className="hidden-search" placeholder="Search" type="text" />
					<RiSearch2Line className="hidden-search-icon" />
				</div>
			</div>
			{isModal && products.length === 0 ? (
				<Modal
					text={
						lang === "hy"
							? "Նշված ապրանք չկա"
							: lang === "en"
							? "Choosen products not found"
							: lang === "ru"
							? "Нет вибраних продуктов"
							: "Նշված ապրանք չկա"
					}
					setIsModal={setIsModal}
					isModal={isModal}
				/>
			) : isModal && products.length !== 0 ? (
				<Modal
					text={
						lang === "hy"
							? "Նշված ապրանքններ"
							: lang === "en"
							? "Liked products"
							: lang === "ru"
							? "вибранние продукти"
							: "Նշված ապրանքններ"
					}
					setIsModal={setIsModal}
					isModal={isModal}
					products={products}
					setProducts={setProducts}
				/>
			) : (
				""
			)}
		</>
	);
};
