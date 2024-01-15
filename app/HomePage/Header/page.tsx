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
const paragraph =
	"Dive into financials, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.";

const Header = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	return (
		<section className="bg-blueLight">
			<div className="flex flex-col justify-center items-center space-y-7 md:w-4/5 lg:w-3/5 mx-auto text-center">
				<h3 className="uppercase bg-gradient-to-r from-[#9891ba] via-[#c07d91] to-[#947e99] inline-block text-transparent bg-clip-text font-semibold">
					Now Available to Everyone
				</h3>
				<h1 className="text-3xl font-bold">
					The definitive research tool for the modern investor.
				</h1>
				<h4 className="text-gray text-xs font-bold">
					Press{" "}
					<span className="bg-[#26272f] font-light text-white px-1 py-[1px] rounded-[4px] border border-[#32333a]">
						T
					</span>{" "}
					anytime to start trail
				</h4>
			</div>
			<motion.div ref={ref} className="mt-20 ">
				<Image
					src={bannerLaptop}
					alt="banner image"
					className="md:w-[calc(70%-10px)] lg:w-[calc(60%-10px)] mx-auto"
				></Image>
				{/* <Image
					src={laptopWallpaper}
					alt="banner image"
					className="md:w-[calc(60%-10px)] lg:w-[calc(60%-10px)] mx-auto relative md:-top-[260px] lg:-top-[455px]"
				></Image> */}
				<motion.div
					style={{
						perspective: 2000,
						width: "64%",
						height: "auto",
						margin: "auto",
					}}
				>
					<motion.div
						style={{
							transform: "rotateX(-70deg)",
							transformOrigin: "center center",
						}}
					>
						<Image
							src={bannerStats}
							alt="banner image"
							className="md:w-[calc(70%-10px)] lg:w-[calc(60%-10px)] mx-auto mt-5 relative -top-[665px] rounded-t-lg border"
						></Image>
					</motion.div>
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
					className="md:w-[calc(70%-10px)] lg:w-[calc(60%-10px)] mx-auto relative mt-5"
				></Image>
            </motion.div>
            <ComponentTitle title={title} text={paragraph}></ComponentTitle>
		</section>
	);
};

export default Header;
