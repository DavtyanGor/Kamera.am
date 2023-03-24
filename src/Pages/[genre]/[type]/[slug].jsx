import React, { useEffect, useState,useContext } from "react";
import { client, urlFor } from "../../../../client.js";
import { useParams } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner.jsx";
import "react-medium-image-zoom/dist/styles.css";
import Heading from "../../../Components/Heading/Heading";
import current from "./current.module.scss";
import Zoom from "react-medium-image-zoom";
import Meta from "../../../Components/Meta/Meta.jsx";
import { FaFacebook, FaViber } from "react-icons/fa";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import Alert from "../../../Components/Alert/Alert.jsx";
import Layout from "../../../Components/Layout/Layout.jsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {dataContext} from "../../../Base.jsx";

const ProductPage = () => {
	const {lang} = useContext(dataContext)
	const [product, setProduct] = useState([]);
	const [alert, setAlert] = useState(false);
	const [productLoading, setProductLoading] = useState(false);
	useEffect(() => {
		const alertTimeOut = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(alertTimeOut);
	}, [alert]);
	let { slug } = useParams();
	async function getProduct(slug) {
		setProductLoading(true);
		const query = `
			*[_type == "products" &&  slug.current == "${slug}"] [0...1]{
				_id,
				name,
				price,
				'image':image.asset._ref,
				'caption':image.caption,
				'attribution':image.attribution,
				type
			}
		`;
		const product = await client.fetch(query);
		setProduct(product);
		setProductLoading(false);
	}
	useEffect(() => {
		getProduct(slug);
	}, []);
	if (product.length === 0 || productLoading) {
		return <Spinner />;
	}
	const copyLink = async () => {
		setAlert(true);
	};
	const productText = lang === "hy"?"Եթե ձեզ հետաքրքրել է ինչ որ ապրանքատեսակ և ցանկանում եք լրացուցիչ տեղեկատվություն ստանալ, կարող եք այցելել մեր խանութ սրահ, զանգահարել մեզ, կամ գրել մեր սոց․ կայքերին":lang === "ru"?"Если вас заинтересовал какой-либо товар и вы хотите получить дополнительную информацию, вы можете посетить наш магазин, позвонить нам или написать в наши соц. сайты":lang==="en"?"If you are interested in any product and want to get additional information, you can visit our store, call us, or write to our socials.":""
	return (
		<Layout>
			<div className={current.mainContainer}>
				<Alert isVisible={alert}>
					<Heading level={"h7"} className={current.alertTitle}>
						Link was copied !
					</Heading>
				</Alert>
				{product &&
					product?.map(({ _id, name, image, price, caption, type }) => {
						return (
							<React.Fragment key={_id}>
								<Meta name={name} image={image} />
								<div className={current.currentContainer}>
									<Zoom>
										<img
											className={current.image}
											src={urlFor(image).width(500).url()}
											alt={caption}
											title={caption}
										/>
									</Zoom>
								</div>
								<div className={current.fields}>
									<div className={current.headings}>
										<h2 className={"text-[16px] ml-4 first-letter:uppercase"}>
											{type}
										</h2>
										<Heading level={"h5"} className={"mt-1"} weight={600}>
											{name}
										</Heading>
										<Heading
											level={"h7"}
											weight={500}
											className={"md:mt-5 mt-2"}
										>
											{price} AMD
										</Heading>
									</div>
									<p className={current.buyDescription}>
										{productText}
									</p>
									<ul className={current.socials}>
										<li>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
												data-action="share/facebook/share"
											>
												<FaFacebook color={"#4267B2"} size={30} />
											</a>
										</li>
										<li>
											<a
												target="_blank"
												rel="noopener noreferrer"
												href={`https://telegram.me/share/url?url=${window.location.href}`}
												data-action="share/telegram/share"
											>
												<BsTelegram color={"#2AABEE"} size={30} />
											</a>
										</li>
										<li>
											<a
												rel="noopener noreferrer"
												href={`whatsapp://send?text=${encodeURIComponent(
													name
												)} ${window.location.href}`}
												data-action="share/whatsapp/share"
												target="_blank"
											>
												<BsWhatsapp size={30} color={"#25D366"} />
											</a>
										</li>
										<li>
											<a
												rel="noopener noreferrer"
												href={`viber://forward?text="${encodeURIComponent(
													name
												)} ${window.location.href}`}
												data-action="share/viber/share"
												target="_blank"
											>
												<FaViber size={30} color={"#7360F2"} />
											</a>
										</li>
										<li>
											<CopyToClipboard text={window.location.href}>
												<button type={"button"} onClick={copyLink}>
													<MdContentCopy size={30} color={"#000000"} />
												</button>
											</CopyToClipboard>
										</li>
									</ul>
								</div>
							</React.Fragment>
						);
					})}
			</div>
		</Layout>
	);
};

export default ProductPage;
