import React, { useContext } from "react";
import about from "./about.module.scss";
import Heading from "../../Components/Heading/Heading.jsx";
import Helmet from "react-helmet";
import { urlFor } from "../../../client.js";
import { Link } from "react-router-dom";
import { dataContext } from "../../Base";
import Layout from "../../Components/Layout/Layout";
function About() {
	const { lang: langu } = useContext(dataContext);
	console.log(langu);
	return (
		<Layout>
			<Helmet
				htmlAttributes={{ lang: `${langu}`, amp: undefined }} // amp takes no value
				title={"About us"}
				titleTemplate="Kamera.am - About us"
				defaultTitle={"Index us"}
				// base={{"target": "_blank", "href": "https://kamera.am/"}}
				meta={[
					{
						name: "description",
						content: "Kamera.am խանութ-սրահը գործում է 2012 թվականից",
					},
					{
						name: "og:description",
						content: "Kamera.am խանութ-սրահը գործում է 2012 թվականից",
					},
					{ property: "og:type", content: "Article" },
					{ property: "title", content: "Kamera.am" },
					{
						property: "og:image",
						content: urlFor(
							"image-8a6a32fceee21528096e616d8a792b64ea3698b4-700x200-png"
						).url(),
					},
					{
						property: "twitter:image",
						content: urlFor(
							"image-8a6a32fceee21528096e616d8a792b64ea3698b4-700x200-png"
						).url(),
					},
					{ property: "twitter:card", content: "summary_large_image" },
					{
						name: "keywords",
						content:
							"kameraam,kamera.am,aboutus,about,about us,Про нас,Про,нас,Нас,Մեր մասին,մեր,մասին,canon,sony,camera,videocamera,lens.spotlight,lights,ֆոտոխցիկեր,տեսախցիկներ, ոսպնյակներ,video camera,digital still camera,flesh-lights,видеокамеры,цифровой,фотокамеры,объектива, прибора освещения, фотокамера, объектив, видеокамера",
					},
					{ property: "fb:app_id", content: "100066871196413" },
					{ property: "image:width", content: "197" },
					{ property: "image:height", content: "197" },
					{ property: "image:url", content: window.location.href },
					{ property: "image:site_name", content: "kamera.am" },
					{ property: "article:publisher", content: "https://kamera.am/" },
					{ property: "article:section", content: "Article" },
					{ property: "article:tag", content: "Article" },
					{ name: "robots", content: "index, follow" },
					{ name: "language", content: "English" },
					{ name: "revisit-after", content: "30 days" },
					{ name: "author", content: "kamera.am" },
					{ property: "og:locale", content: "en-US" },
					{ property: "og:locale:alternate", content: "hy-AM" },
					{ property: "og:locale:alternate", content: "ru-RU" },
				]}
			/>
			<section className={about.aboutSection}>
				<Heading role={"heading"} level={"h6"}>
					Մեր մասին
				</Heading>
				<blockquote>
					<p className={about.aboutUs}>
						<Link to="/" className={about.we}>
							Kamera.am
						</Link>
						խանութ-սրահը գործում է 2012 թվականից: Լուսանկարահանման և
						տեսանկարահանման սարքավորումների շուկայում տարիների հաջողված
						գործունեության շնորհիվ մեզ հաջողվել է ներգրավել բազմաթիվ
						հաճախորդների: Մենք վաճառում ենք թվային ֆոտոխցիկեր, տեսախցիկներ,
						ոսպնյակներ եւ այլ պարագաներ` արտադրված լավագույն արտադրողների
						կողմից: Եթե ​​դուք հետաքրքրված եք տեսախցիկի, ոսպնյակի, լուսարձակի
						կամ այլ սարքերի ձեռքբերմամբ, մի հապաղեք, զանգահարեք մեզ: Մենք
						կօգնենք ձեզ ընտրել անհրաժեշտ սարքավորումները, տրամադրել անհրաժեշտ
						խորհրդատվություն եւ հաճույքով կպատասխանենք ձեր բոլոր հարցերին: Նաև
						կարող եք ձեր հարցը հղել մեզ սոց․ կայքերի միջոցով։
					</p>
				</blockquote>
			</section>
		</Layout>
	);
}

export default About;
