import React, { useContext } from "react";
import contacts from "./contacts.module.scss";
import { FaPhone, FaViber, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Section from "../../Components/Section/Section";
import { dataContext } from "../../Base";
import Heading from "./../../Components/Heading/Heading";
import Layout from "../../Components/Layout/Layout";

export const Contacts = () => {
	const { lang } = useContext(dataContext);
	return (
		<Layout>
			<Section className={contacts.contacts}>
				<div className={contacts.contactsHeading}>
					<Heading level={"h6"} className={"pl-0"}>
						{lang === "en"
							? "Contacts"
							: lang === "ru"
							? "Контакты"
							: lang === "hy"
							? "Կոնտակտներ"
							: "Կոնտակտներ"}
					</Heading>
					<p className={contacts.contactsDescription}>
						{lang === "en"
							? "Our employees will always be happy to answer your questions"
							: lang === "ru"
							? "Наши сотрудники всегда будут рады ответить на ваши вопросы"
							: lang === "hy"
							? "Մեր աշխատակիցները միշտ սիրով կպատասխանեն ձեր հարցերին"
							: "Մեր աշխատակիցները միշտ սիրով կպատասխանեն ձեր հարցերին"}
					</p>
				</div>
				<div className={contacts.contactsUS}>
					<Heading level={"h7"} className={"pl-0"}>
						{lang === "en"
							? "Contact us։"
							: lang === "ru"
							? "Наши контакты։"
							: lang === "hy"
							? "Մեր կոնտակտները։"
							: "Մեր կոնտակտները։"}
					</Heading>
					<ul className={contacts.contactsPhone}>
						<li className={contacts.contactsItem}>
							<a href={"tel:+37491435682"} className={contacts.contactsNumber}>
								<FaPhone color="#013cf0" size={18} />
								091435682
							</a>
							<div className={contacts.contactsSocials}>
								<a href="viber://chat?number=37491435682">
									<FaViber color={"#6f5dea"} size={21} />
								</a>
								<a
									aria-label="Chat on WhatsApp"
									href="https://wa.me/37491435682"
								>
									<FaWhatsapp color={"#25d366"} size={21} />
								</a>
								<a href="https://t.me/+37491435682">
									<FaTelegram color={"#27a0df"} size={21} />
								</a>
							</div>
						</li>
						<li className={contacts.contactsItem}>
							<a href={"tel:+37455535682"} className={contacts.contactsNumber}>
								<FaPhone color="#013cf0" size={18} />
								055535682
							</a>
							<div className={contacts.contactsSocials}>
								<a href="viber://chat?number=37455535682">
									<FaViber color={"#6f5dea"} size={21} />
								</a>
								<a
									aria-label="Chat on WhatsApp"
									href="https://wa.me/37455535682"
								>
									<FaWhatsapp color={"#25d366"} size={21} />
								</a>
								<a href="https://t.me/+37455535682">
									<FaTelegram color={"#27a0df"} size={21} />
								</a>
							</div>
						</li>
						<li className={contacts.contactsItem}>
							<a href={"tel:+37494435682"} className={contacts.contactsNumber}>
								<FaPhone color="#013cf0" size={18} />
								094435682
							</a>
						</li>
					</ul>
				</div>
				<div className={contacts.contactsOurAddress}>
					<Heading level={"h7"} className="pl-0">
						{lang === "en"
							? "Our address"
							: lang === "ru"
							? "Наш адрес"
							: lang === "hy"
							? "Մեր հասցեն"
							: "Մեր հասցեն՝"}
					</Heading>
					<address className={contacts.contactsAddressName}>
						<MdLocationOn size={20} color={"#013cf0"} />
						<span>
							{lang === "en"
								? "12107, Grigor Lusavorich Street, Yerevan"
								: lang === "ru"
								? "12107, улица Григора Лусаворича, Ереван"
								: lang === "hy"
								? "12107, Գրիգոր Լուսավորիչի փողոց, Երևան"
								: "12107, Գրիգոր Լուսավորիչի փողոց, Երևան"}
						</span>
					</address>
				</div>
				<div className={contacts.contactsMap}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.1112321052494!2d44.50352592923284!3d40.17691072415049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcff436b0a2d%3A0xffce5c38dcb63078!2skamera.am!5e0!3m2!1sru!2s!4v1669756918793!5m2!1sru!2s"
						style={{ border: "0", width: "100%", height: "500px" }}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</Section>
		</Layout>
	);
};
export default Contacts;
