import React, { useContext, useState } from "react";
import "./_headerTop.scss";
import { FaPhone } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { dataContext } from "../../../Base";

export const HeaderTop = () => {
	const [langContainer, setLangContainer] = useState(false);
	const { lang, setLang } = useContext(dataContext);
	window.addEventListener("click", function () {
		setLangContainer(false);
	});

	return (
		<div className="header__top-right">
			<div className="header__top-fake"></div>
			<div className="header__top-container">
				<div className="header__phone-container">
					<FaPhone className="header__phone" />
					<a href="tel: +37410535682">(010) 535-682</a>
				</div>
				<div className="header__mail-container">
					<a href="mailto:info@kamera.am" target="_blank">
						<SiMaildotru className="header__mail" />
					</a>
				</div>
				<div
					className="header__lang-container"
					onClick={(e) => {
						e.stopPropagation();
						setLangContainer(!langContainer);
					}}
				>
					<TbWorld className="header__lang" />

					<p>
						{lang === "hy"
							? "Հայերեն"
							: lang === "en"
							? "English"
							: lang === "ru"
							? "Русский"
							: "Հայերեն"}
					</p>
					<MdKeyboardArrowDown />
					<div className={langContainer ? "header__langs-container" : "none"}>
						<div className="header__langs-triangle"></div>
						<button type={"button"} onClick={() => setLang("en")}>
							English
						</button>
						<button type={"button"} onClick={() => setLang("ru")}>
							Русский
						</button>
						<button type={"button"} onClick={() => setLang("hy")}>
							Հայերեն
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
