"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import macClosedOff from "@/public/images/laptop-closed-off_4x.434654c4-PhotoRoom.png";
import macClosedOn from "@/public/images/laptop-closed-on_4x.06eb6128.jpg";
import macLogoNotHovered from "@/public/images/apple-unhovered_4x.f4daffa8.png";
import macLogoHovered from "@/public/images/apple-hovered_4x.981e3b1f.png";
const WholeNew = () => {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<section className="bg-blueLight pt-40">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold bg-headline-gradient text-transparent bg-clip-text inline-block">
					A whole new
				</h2>
				<h2 className="text-3xl font-bold bg-headline-gradient text-transparent bg-clip-text inline-block">
					take on research.
				</h2>
			</div>
			<div className="flex justify-center mt-7">
				<motion.button
					className="border hover:border-white rounded-full px-14 py-[10px] font-semibold text-xs"
					whileHover={{
						background: "white",
						color: "black",
						boxShadow: "0px 0px 4px rgb(255,255,255)",
						transition: {
							duration: 0.3,
						},
					}}
					initial={{
						background: "",
						color: "white",
					}}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					Try it free
				</motion.button>
			</div>
			<div ref={ref} className="relative mt-32 w-[80%] mx-auto">
				<Image
					src={macClosedOff}
					alt="mac closed"
					className="border"
				></Image>
				<Image
					src={macLogoNotHovered}
					alt="not hovered mac"
					className="absolute top-0 left-0 z-10"
				></Image>
				<Image
					src={macLogoHovered}
					alt="hovered mac"
					className={`${
						isHovered ? "flex" : "hidden"
					} absolute top-0 left-0 z-20`}
				></Image>
				<Image
					src={macClosedOn}
					alt="hovered mac"
					className={`absolute top-0 left-0 z-0`}
					style={{
						opacity: isInView ? "1" : "0",
						transition: "ease-in-out 1s",
						transitionDelay: "0.5s",
					}}
				></Image>
				<div></div>
			</div>
		</section>
	);
};
export default WholeNew;
