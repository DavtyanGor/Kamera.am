import React, { useContext, useEffect, useId, useState } from "react";
import search from "./search.module.sass";
import Media from "react-media";
import { BiSearch } from "react-icons/bi";
import useDebounce from "../../Hooks/useDebounce";
import { client } from "../../../client.js";
import SearchedItem from "../SearchedItem/SearchedItem.jsx";
import { MdReadMore } from "react-icons/md";
import cl from "classnames";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Base";
function SearchInput({
	inputClassName = "",
	sliceCount = 5,
	containerClassName = "",
	listDiv = "",
	searchListDivClassName = "",
}) {
	const navigate = useNavigate();
	const searchId = useId();
	const [searchedProducts, setSearchedProducts] = useState([]);
	const [isShowProducts, setIsShowProducts] = useState(false);
	const { lang } = useContext(dataContext);
	const searchProductsSlice = searchedProducts.slice(0, sliceCount);
	const [text, setText] = useState("");
	const value = useDebounce(text, 400);
	const closeSearchField = () => {
		setIsShowProducts(false);
	};
	useEffect(() => {
		window.addEventListener("click", closeSearchField, { passive: true });
		return () => window.removeEventListener("click", closeSearchField);
	}, []);
	const searchHandle = ({ target }) => setText(target.value);
	const getProducts = async (searchvalue) => {
		const query = `
		*[_type == "products" && search.current 
		match "${
			searchvalue.trim().length >= 3 &&
			searchvalue.trim().toLowerCase().toString()
		}*"] [0...6]{
			'id':_id,
			'image':image.asset._ref,
			 name,
			 price,
			 type,
			 genre,
			 'slug':slug.current
		}
		`;
		const result = await client.fetch(query);
		setSearchedProducts(result);
		setIsShowProducts(true);
	};
	useEffect(() => {
		getProducts(value);
	}, [value]);

	const OnSubmit = async (e) => {
		e.preventDefault();
		setTimeout(() => {
			if (!isShowProducts) {
				navigate(`/search/${value}`);
				!isShowProducts && setText("");
			}
		}, 500);
	};
	return (
		<form onSubmit={OnSubmit}>
			<div className={cl(search.inputContainer, containerClassName)}>
				<label htmlFor={searchId} className={search.label}>
					<input
						tabIndex="1"
						type={"search"}
						className={cl(search.input, inputClassName)}
						onClick={(e) => e.stopPropagation()}
						required={true}
						onChange={searchHandle}
						value={text}
						placeholder={
							lang === "en"
								? "Search for products..."
								: lang === "ru"
								? "Поиск по продуктам..."
								: lang === "hy"
								? "Փնտրել ապրանք..."
								: "Փնտրել ապրանք..."
						}
					/>
					<Media query={"(min-width:768px)"}>
						{(matches) =>
							matches ? (
								value.length > 3 ? (
									<button type={"submit"}>
										<BiSearch color="#003dee" size={26} />
									</button>
								) : (
									<button className={search.searchBtn} type={"button"}>
										<BiSearch size={26} />
									</button>
								)
							) : value.length ? (
								<button type={"submit"}>
									<BiSearch size={26} />
								</button>
							) : (
								<button className={search.searchBtn} type={"button"}>
									<BiSearch size={26} />
								</button>
							)
						}
					</Media>
				</label>
				{isShowProducts && searchedProducts.length > 0 ? (
					<div
						className={cl(search.searchedListDiv, searchListDivClassName)}
						onClick={(e) => e.stopPropagation()}
					>
						<ul className={cl(search.list, listDiv)}>
							{searchProductsSlice &&
								searchProductsSlice?.map((searchedProduct) => (
									<SearchedItem key={searchedProduct.id} {...searchedProduct} />
								))}
							{searchedProducts.length >= 5 && (
								<a href={`/search/${value}`} className={search.seeMore}>
									see more products
									<MdReadMore size={26} />
								</a>
							)}
						</ul>
					</div>
				) : (
					""
				)}
			</div>
		</form>
	);
}
export default SearchInput;
