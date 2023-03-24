import React, {useEffect, useRef, useState} from "react";
import {GrClose, GrPowerReset} from "react-icons/gr";
import { urlFor, client } from "../../../client";
import Heading from "../Heading/Heading";
import modal from "./modal.module.scss";
import {Link, useNavigate} from "react-router-dom";
import { BsBasket2Fill } from "react-icons/bs";
import {BiReset} from "react-icons/all";
const Modal = ({ text = "", products, setIsModal, isModal, setProducts }) => {
	const nav = useNavigate()
	const [reset,setReset] = useState(false)	
	const [likedProducts, setLikedProducts] = useState([]);
	const clearStorage = ()=>{
		if (products){
			setReset(true)
			likedProducts.forEach(el=>{
				localStorage.removeItem(el._id)
				localStorage.removeItem("products")
			})
			nav(0)
		}
	}
	useEffect(() => {
		const closeModalOnKeyPress = (event) => {
			if (event.which === 27 && isModal) {
				setIsModal(false);
			}
		};
		window.addEventListener("keydown", closeModalOnKeyPress);
		return () => window.removeEventListener("keydown", closeModalOnKeyPress);
	}, []);
	async function getLikedProducts(reducedById) {
		const query = `
			*[_id in ${reducedById}]{
				_id,
				name,
				'image':image.asset._ref,
				'caption':image.caption,
				'attribution':image.attribution,
				'slug': slug.current,
				type,
				genre
			}
		`;
		const data = await client.fetch(query);
		setLikedProducts(data);
	}
	useEffect(() => {
		const reducedById = [];
		products?.forEach((p) => {
			reducedById.push(p._id);
		});
		getLikedProducts(JSON.stringify(reducedById));
	}, [products]);
	const removeCurrentId = (id) => {
		setProducts(products.filter((p) => p._id !== id));
	};
	return (
		<div className={modal.modal} onClick={() => setIsModal(false)}>
			<div className={modal.content} onClick={(e) => e.stopPropagation()}>
				<div className={modal.heading}>
				<Heading level={"h5"} className={"text-center py-1 px-0"}>
					{text}
				</Heading>
				 <button className={modal.Clear} type={"button"} onClick={clearStorage}>
						<BiReset className={`${modal.init} ${reset?modal.reset:""}`} title={"Clear"}   />
					</button> 
			</div>
				<button
					type={"button"}
					onClick={() => setIsModal(false)}
					className={modal.closeButton}
				>
					<GrClose size={20} />
				</button>
				{likedProducts && (
					<div className={modal.products}>
						{likedProducts?.map(
							(
								{ image, _id, name, slug, attribution, caption, type, genre },
								index
							) => (
								<div className={modal.product} key={_id}>
									<div className={modal.productLeft}>
										<Link
											to={`/products/${genre}/${type}/${slug}`}
											onClick={() => setIsModal(false)}
											className={"inline-block"}
										>
											<div className={modal.productImageContainer}>
												<img
													src={urlFor(image).width(90).url()}
													className={modal.productImage}
													alt={attribution}
													title={caption}
												/>
											</div>
										</Link>
										<h6 className="text-base md:text-xl lg:text-2xl">{name}</h6>
									</div>
									<Link
										className={"text-blue-900"}
										to={`/products/${genre}/${type}/${slug}`}
										onClick={() => setIsModal(false)}
									>
										<BsBasket2Fill size={30} />
									</Link>
								</div>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
