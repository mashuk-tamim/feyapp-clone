"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import macClosed from "@/public/images/laptop-closed-off_4x.434654c4-PhotoRoom.png";
import macLogoNotHovered from "@/public/images/apple-unhovered_4x.f4daffa8.png";
import macLogoHovered from "@/public/images/apple-hovered_4x.981e3b1f.png";
const page = () => {
    const [isHovered, setIsHovered] = useState(false);

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
			<div className="relative mt-32 w-[80%] mx-auto">
				<Image
					src={macClosed}
					alt="mac closed"
					className="border"
				></Image>
				<Image
					src={macLogoNotHovered}
					alt="not hovered mac"
					className="absolute top-0 left-0"
				></Image>
				<Image
					src={macLogoHovered}
					alt="hovered mac"
					className={`${isHovered ? "flex": "hidden"} absolute top-0 left-0`}
                ></Image>
			</div>
		</section>
	);
};
export default page;
