"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import bannerLaptop from "@/public/images/macbook_4x.299ca224.jpg";
import laptopWallpaper from "@/public/images/screen-1_4x.5ab54123cropped.jpg";
import bannerStats from "@/public/images/home-UI_4x.d5c9876e.png";
import bannerStats2 from "@/public/images/canvas-UI_4x.0ca19cc7.png";
import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";

const title = "Immerse yourself";
const text =
	"Dive into financial, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.";

const Header = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	return (
		<section className="bg-blueLight">
			<div className="flex flex-col justify-center items-center space-y-7 md:w-4/5 lg:w-3/5 mx-auto text-center">
				<h3 className="uppercase bg-headline-gradient2 lg:inline-block text-transparent bg-clip-text font-semibold hidden">
					Now Available to Everyone
				</h3>
				<h3 className="uppercase bg-headline-gradient2 inline-block text-transparent bg-clip-text font-semibold md:hidden">
					Available Now
				</h3>
				<h1 className="text-4xl font-bold md:w-[80%]">
					The definitive research tool for the modern investor.
				</h1>
				<h4 className="text-gray text-xs font-bold hidden lg:flex">
					Press{" "}
					<span className="bg-[#26272f] font-light text-white px-1 py-[1px] rounded-[4px] border border-[#32333a]">
						T
					</span>{" "}
					anytime to start trail
				</h4>
				<button className="bg-[#17171b] px-10 py-3 rounded-full font-bold hover:bg-[#1e1e22] flex lg:hidden">
					Start your free trail
				</button>
			</div>

			{/* <Image
					src={laptopWallpaper}
					alt="banner image"
					className="md:w-[calc(60%-10px)] lg:w-[calc(60%-10px)] mx-auto relative md:-top-[260px] lg:-top-[455px]"
				></Image> */}
			<motion.div
				style={{
					perspective: 2000,
					margin: "auto",
				}}
				className="relative w-[320px] md:w-[500px] lg:w-[750px] mx-auto"
			>
				<Image
					src={bannerLaptop}
					alt="banner image"
					className=""
				></Image>
				<motion.div
					style={{
						// transform: "rotateX(-70deg)",
						transformOrigin: "center center",
					}}
					className=" border-yellow-600 left-0 z-10 flex justify-center transform"
				>
					<Image
						src={bannerStats}
						alt="banner image"
						className="mx-auto rounded-t-lg"
					></Image>
				</motion.div>

				{/* <div className="[perspective:2000px]">
					<div className="[transform:rotateX(-25deg)]">
						<motion.img
							src="https://i.ibb.co/fMHZhPC/home-UI-4x-d5c9876e.png"
							alt="banner image"
							className="md:w-[calc(60%-10px)] lg:w-[calc(60%-10px)] mx-auto relative mt-5"
						></motion.img>
					</div>
				</div> */}
				<Image
					src={bannerStats2}
					alt="banner image"
					className="mx-auto mt-5"
				></Image>
			</motion.div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="w-[60%] mx-auto text-gray text-sm font-medium mt-7">{text}</p>
			</div>
		</section>
	);
};

export default Header;
