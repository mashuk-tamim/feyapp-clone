"use client";
import React, { useState } from "react";
import { easeIn, motion, useCycle } from "framer-motion";

const TrailButton = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [animation, cycleAnimation] = useCycle(
		"animationOne",
		"animationTwo"
	);
	const handleMouseEnter = () => {
		setIsHovered(true);
		cycleAnimation();
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const svgVariant = {
		animationOne: {
			scale: isHovered ? 1.5 : 1,
			stroke: isHovered ? "#ffffff" : "#868F97",
		},
		animationTwo: {
			x: isHovered ? [0, 0, 3, 0, -3, 0, 2, 0, -2, 0] : 0,
			transition: {
				duration: 0.6,
				repeat: Infinity,
				repeatDelay: 3,
			},
		},
	};
	return (
		<div className="relative flex flex-col items-center">
			<button
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="select-none border border-[#45494b] rounded-full px-3 py-2 text-[12px] text-white font-bold flex gap-2 items-center bg-[#121212]"
			>
				<motion.svg
					animate={{
						scale: isHovered ? 1.5 : 1,
						stroke: isHovered ? "#ffffff" : "#868F97",
					}}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#868F97"
				>
					<motion.path
						// variants={svgVariant}
						// animate={animation}
						animate={{
							// scale: isHovered ? 1.5 : 1,
							stroke: isHovered ? "#ffffff" : "#868F97",
							x: isHovered ? [0, 0, 3, 0, -3, 0, 2, 0, -2, 0] : 0,
							transition: {
								duration: 0.6,
								delay: 3,
								repeat: Infinity,
								repeatDelay: 3,
							},
						}}
						className={`${
							isHovered ? "stroke-[#ffffff]" : "stroke-[#868F97]"
						}`}
						stroke="#868F97"
						strokeWidth="1.5"
						d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"
					></motion.path>
					<motion.circle
						initial={{
							opacity: 1,
						}}
						animate={{
							opacity: isHovered ? 0 : 1,
						}}
						cx="12"
						cy="12"
						r="11"
						stroke="#868F97"
						strokeWidth="1.5"
					></motion.circle>
				</motion.svg>
				Start your trail
			</button>

            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    transition: {
                        duration: 0.2,
                        ease: easeIn,
                        delay: 0.5
                    }
                }}
                className="absolute top-12 bg-black border-[0.5px] border-[#32333a] flex justify-center w-[110px] py-[2px] px-2 rounded-md transition delay-500">
				<p className="text-[10px]">
					Start your trail{" "}
					<span className="bg-[#26272f] font-light text-white px-1 ml-1 py-[1px] rounded-[4px] border border-[#32333a]">
						T
					</span>
				</p>
			</motion.div>
		</div>
	);
};

export default TrailButton;
