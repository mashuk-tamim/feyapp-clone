"use client";
import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";

const LoginButton = () => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="relative flex flex-col items-center">
			<motion.button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="flex gap-2 items-center text-[12px] font-bold"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="sc-2d2b0f13-5 gDcOZS"
				>
					<motion.path
						d="M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						stroke="#868F97"
					></motion.path>
					<motion.path
						// initial={{
						// 	pathLength: 0,
						// }}
						animate={{
							pathLength: isHovered ? 1 : 0,
							opacity: isHovered ? 1 : 0.3,
							stroke: "#ffffff",
							transition: {
								duration: 1.5,
							},
						}}
						d="M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						stroke="#868F97"
					></motion.path>
				</svg>
				Login
			</motion.button>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: isHovered ? 1 : 0,
					transition: {
						duration: 0.2,
						ease: easeIn,
						delay: 0.5,
					},
				}}
				className="absolute top-8 bg-black border-[0.5px] border-[#32333a] flex justify-center py-[2px] px-2 rounded-md transition delay-500"
			>
				<p className="text-[10px]">
					Login
					<span className="bg-[#26272f] font-light text-white px-1 ml-1 py-[1px] rounded-[4px] border border-[#32333a]">
						L
					</span>
				</p>
			</motion.div>
		</div>
	);
};

export default LoginButton;
