import React, { createContext, Suspense, useEffect, useState } from "react";
import main from "./main.module.scss";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./Components/HeaderContainer";
import Spinner from "./Components/Spinner/Spinner";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/[genre]/[type]/[slug]";
import CategoryPage from "./Pages/[link_slug]";
import About from "./Pages/About/About.jsx";
import Value from "./Pages/SearchedValuePage/[value].jsx";
import Media from "react-media";
import SearchInput from "./Components/SearchInput/SearchInput";
import section from "./Components/Section/section.module.scss";
import useLocalStorage from "./Hooks/useLocalStorage";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Pages/Contacts/Contacts";
import Categories from "./Pages/Categories/Categories";
import Error from "./Pages/404/404";
export const dataContext = createContext(null);
function Base() {
	const [allProducts, setAllProducts] = useState([]);
	const [superlativeProducts, setSuperlativeProducts] = useState([]);
	const [isMediaSearch, setIsMediaSearch] = useState(false);
	const [lang, setLang] = useLocalStorage("lang", "hy");
	const [products, setProducts] = useLocalStorage("products", []);
	return (
		<>
			<dataContext.Provider
				value={{
					lang,
					setLang,
					products,
					setProducts,
					allProducts,
					setAllProducts,
					setSuperlativeProducts,
					superlativeProducts,
					isMediaSearch,
					setIsMediaSearch,
				}}
			>
				<HeaderContainer />
				<Media query={"(min-width:768px)"}>
					{(matches) =>
						matches
							? ""
							: isMediaSearch && (
									<SearchInput
										sliceCount={3}
										searchListDivClassName={section.searchListDivClassName}
										containerClassName={"relative"}
										inputClassName={"w-full"}
									/>
							  )
					}
				</Media>
				<Suspense fallback={<Spinner />}>
					<main className={`${main["main"]}`}>
						<Routes>
							<Route path={"*"} element={<Error />} />
							<Route
								path={"/"}
								element={<Home products={products} setProducts={setProducts} />}
							></Route>
							<Route
								path={"/products/:genre/:type/:slug"}
								element={<ProductPage />}
							/>
							<Route
								path={"/categories/:link_slug"}
								element={
									<CategoryPage products={products} setProducts={setProducts} />
								}
							/>
							<Route path={"/about"} element={<About />} />
							<Route
								path={"/search/:value"}
								element={
									<Value products={products} setProducts={setProducts} />
								}
							/>
							<Route path={"/contacts"} element={<Contacts />} />
							<Route
								path={"/categories"}
								element={window.innerWidth >= 778 ? <Categories /> : <Home />}
							/>
						</Routes>
					</main>
				</Suspense>
				<Footer />
			</dataContext.Provider>
		</>
	);
}
export default Base;
