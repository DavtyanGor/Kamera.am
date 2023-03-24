import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import imgGoPro from "/public/gopro1.jpg";
import imgGoPro2 from "/public/gopro2.jpg";
import "./_slide1.scss";

const Slide1 = () => {
	return (
		<div className="slider__container">
			<Splide
				aria-label="My Favorite Images"
				options={{
					width: "100vw",
					height: "28.2vw",
					padding: 0,
					autoHeight: true,
					autoplay: true,
					type: "loop",
					pauseOnHover: false,
					pauseOnFocus: true,
					keyboard: "global",
					interval: 4000,
					cover: true,
				}}
			>
				<SplideSlide className="slider__img">
					<img src={imgGoPro} />
				</SplideSlide>
				<SplideSlide className="slider__img">
					<img src={imgGoPro2} />
				</SplideSlide>
				<SplideSlide className="slider__img">
					<img src={imgGoPro} />
				</SplideSlide>
				<SplideSlide className="slider__img">
					<img src={imgGoPro2} />
				</SplideSlide>
				<SplideSlide className="slider__img">
					<img src={imgGoPro} />
				</SplideSlide>
				<SplideSlide className="slider__img">
					<img src={imgGoPro2} />
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Slide1;
