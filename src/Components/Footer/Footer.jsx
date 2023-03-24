import React, { useContext, useEffect, useState } from "react";
import "./_footer.scss";
import { MdOutlineFacebook, MdOutlineAccessTime } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegram, FaViber, FaWhatsapp, FaCameraRetro } from "react-icons/fa";
import { client, urlFor } from "../../../client.js";
import { Link } from "react-router-dom";
import { dataContext } from "../../Base";
export const Footer = () => {
	const [logoImage, setLogoImage] = useState([]);
	const { lang } = useContext(dataContext);
	async function getLogo() {
		const query = `
			*[_type == "meta"] [0...1]{
				'img':meta_image
			}
		`;
		const result = await client.fetch(query);
		setLogoImage(result);
	}
	useEffect(() => {
		getLogo();
	}, []);
	return (
		<footer className="footer mt-10">
			<div className="footer__top">
				<div className="footer__socials">
					<div className="footer__socials-left">
						<div className="footer__socials-txt footer__socials-txt1">
							{lang === "en"
								? "Socials"
								: lang === "ru"
								? "Соц. сети"
								: lang === "hy"
								? "Սոց․ կայքեր"
								: "Սոց․ կայքեր"}
						</div>
						<ul className="footer__socials-icons">
							<li>
								<a href="#">
									<MdOutlineFacebook className="footer__socials-fb" />
								</a>
							</li>
							<li>
								<a href="#">
									<AiOutlineInstagram
										className="footer__socials-ig"
										style={{ fontSize: "27px" }}
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<FaTelegram
										className="footer__socials-tg"
										style={{ fontSize: "23.5px" }}
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<FaViber
										className="footer__socials-vb"
										style={{ fontSize: "23.5px" }}
									/>
								</a>
							</li>
							<li>
								<a href="#">
									<FaWhatsapp className="footer__socials-wa" />
								</a>
							</li>
						</ul>
					</div>
					<ul className="footer__socials-items">
						<li>
							<Link to={"/about"}>
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
							<Link to="#">
								{lang === "en"
									? "Credit terms"
									: lang === "ru"
									? "Условия кредита"
									: lang === "hy"
									? "Վարկի պայմաններ"
									: "Վարկի պայմաններ"}
							</Link>
						</li>
						<li>
							<Link to="/contacts">
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
							<Link to="#">
								{lang === "en"
									? "Delivery and payments"
									: lang === "ru"
									? "Доставка и оплата"
									: lang === "hy"
									? "Առաքում և վճարումներ"
									: "Առաքում և վճարումներ"}
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer__middle">
				<div className="footer__middle-block">
					<div className="footer__middle-icon">
						<MdOutlineAccessTime size={40} />
					</div>
					<div className="footer__middle-txt">
						<h3 className="footer__middle-title">
							{lang === "en"
								? "Working hours"
								: lang === "ru"
								? "Часы работы"
								: lang === "hy"
								? "Աշխատանքային ժամեր"
								: "Աշխատանքային ժամեր"}
						</h3>
						<p className="footer__middle-sub">
							{lang === "en"
								? "Mon.-Sat "
								: lang === "ru"
								? "пон.-суб "
								: lang === "hy"
								? "Երկ․-շաբ "
								: "Երկ․-շաբ "}
							09:00 - 19:00
						</p>
					</div>
				</div>
				<div className="footer__middle-block footer__middle-block2">
					<div>
						<BsBoxSeam size={36} />
					</div>
					<div className="footer__middle-txt">
						<h3 className="footer__middle-title">
							{lang === "en"
								? "Delivery"
								: lang === "ru"
								? "Доставка"
								: lang === "hy"
								? "Առաքում"
								: "Առաքում"}
						</h3>
						<p className="footer__middle-sub">
							{lang === "en"
								? "Within 1 working"
								: lang === "ru"
								? "В течении 1 рабочего"
								: lang === "hy"
								? "1 Աշխատանքային "
								: "1 Աշխատանքային "}
						</p>
						<p className="footer__middle-sub">
							{lang === "en"
								? "day "
								: lang === "ru"
								? "дня "
								: lang === "hy"
								? "օրվա ընթացքում "
								: "օրվա ընթացքում "}
							09:00 - 19:00
						</p>
					</div>
				</div>
				<div className="footer__middle-block footer__middle-block3">
					<div>
						<FaCameraRetro size={36} />
					</div>
					<div className="footer__middle-txt">
						<h3 className="footer__middle-title">
							{lang === "en"
								? "Quality product"
								: lang === "ru"
								? "Качественный продукт"
								: lang === "hy"
								? "Որակյալ արտադրանք"
								: "Որակյալ արտադրանք"}
						</h3>
						<p className="footer__middle-sub">
							{lang === "en"
								? "Quality service"
								: lang === "ru"
								? "Качественное обслуживание"
								: lang === "hy"
								? "Որակյալ սպասարկում"
								: "Որակյալ սպասարկում"}
						</p>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom-left">
					<div className="footer__logo">
						{logoImage &&
							logoImage.map(({ img }) => (
								<img key={img} src={urlFor(img).url()} alt="logo" />
							))}
					</div>
					<h4 className="footer__copyright">
						Copyright © {new Date().getFullYear()} Kamera.am
						{lang === "en"
							? " All rights reserved."
							: lang === "ru"
							? " Все права защищены."
							: lang === "hy"
							? " Բոլոր իրավունքները պաշտպանված են."
							: " Բոլոր իրավունքները պաշտպանված են."}
					</h4>
				</div>
				<div className="footer__bottom-right">
					<a
						rel={"noreferrer noopener noindex"}
						href="https://cis.visa.com/"
						target="_blank"
					>
						<RiVisaLine className="footer__visa" />
					</a>
					<a
						rel={"noreferrer noopener noindex"}
						href="https://www.mastercard.us/en-us.html"
						target="_blank"
						className="footer__master"
					>
						<img src="/MasterCardLogo.png" alt="MasterCard" />
					</a>
					<a
						rel={"noreferrer noopener noindex"}
						href="https://www.idram.am/"
						target="_blank"
						className="footer__iDram"
					>
						<img src="/iDramLogo.svg" alt="iDram" />
					</a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
