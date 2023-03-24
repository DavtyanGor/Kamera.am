import React from "react";
import Helmet from "react-helmet";
import { urlFor } from "../../../client.js";

const Meta = ({
	name = "kamera.am",
	image = "image-8a6a32fceee21528096e616d8a792b64ea3698b4-700x200-png",
}) => {
	return (
		<Helmet
			// htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
			title={name}
			defaultTitle={name}
			// base={{"target": "_blank", "href": "https://kamera.am/"}}
			meta={[
				{
					name: "description",
					content:
						"Kamera.am խանութ-սրահ: Մենք վաճառում ենք թվային  ֆոտոխցիկեր,տեսախցիկներ, ոսպնյակներ եւ այլ պարագաներ` արտադրված լավագույն արտադրողների կողմից:",
				},
				{
					name: "og:description",
					content:
						"Kamera.am խանութ-սրահ: Մենք վաճառում ենք թվային  ֆոտոխցիկեր,տեսախցիկներ, ոսպնյակներ եւ այլ պարագաներ` արտադրված լավագույն արտադրողների կողմից:",
				},
				{ property: "og:type", content: "website" },
				{ property: "title", content: "Kamera.am - Index us" },
				{ property: "og:image", content: urlFor(image).url() },
				{ property: "twitter:image", content: urlFor(image).url() },
				{ property: "twitter:card", content: "summary_large_image" },
				{
					name: "keywords",
					content:
						"kameraam,kamera.am,canon,sony,camera,videocamera,lens.spotlight,lights,ֆոտոխցիկեր,տեսախցիկներ, ոսպնյակներ,video camera,digital still camera,flesh-lights,видеокамеры,цифровой,фотокамеры,объектива, прибора освещения, фотокамера, объектив, видеокамера",
				},
				{ property: "fb:app_id", content: "100066871196413" },
				{ property: "image:width", content: "197" },
				{ property: "image:height", content: "197" },
				{ property: "image:url", content: window.location.href },
				{ property: "image:site_name", content: "kamera.am" },
				{ property: "article:publisher", content: "https://kamera.am/" },
				{ property: "article:section", content: "Kamera.am" },
				{ property: "article:tag", content: "Kamera.am" },
				{ name: "robots", content: "index, follow" },
				{ name: "language", content: "English" },
				{ name: "revisit-after", content: "30 days" },
				{ name: "author", content: "kamera.am" },
				{ property: "og:locale", content: "en-US" },
				{ property: "og:locale:alternate", content: "hy-AM" },
				{ property: "og:locale:alternate", content: "ru-RU" },
			]}
		/>
	);
};

export default Meta;
