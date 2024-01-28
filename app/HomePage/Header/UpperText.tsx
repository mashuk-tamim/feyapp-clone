"use client"
import React from "react";
import { motion } from "framer-motion";

const HeaderText = () => {
	const heading1Variant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0,
				duration: 1,
			},
		},
	};
	const heading2Variant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 2,
			},
		},
	};
	const imageVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				duration: 3,
			},
		},
	};
	return (
		<div>
			<div className="flex flex-col justify-center items-center space-y-5 md:w-4/5 lg:w-3/5 mx-auto text-center pt-4">
				<motion.h3
					className="uppercase bg-headline-gradient2 lg:inline-block text-transparent bg-clip-text font-semibold hidden text-sm"
					variants={heading2Variant}
					animate="visible"
					initial="hidden"
				>
					Now Available to Everyone
				</motion.h3>
				<motion.h3
					className="uppercase bg-headline-gradient2 inline-block text-transparent bg-clip-text font-semibold md:hidden"
					variants={heading2Variant}
					animate="visible"
					initial="hidden"
				>
					Available Now
				</motion.h3>
				<motion.h1
					className="text-3xl font-bold md:w-[75%]"
					variants={heading1Variant}
					animate="visible"
					initial="hidden"
				>
					The definitive research tool for the modern investor.
				</motion.h1>
				<motion.h4
					className="text-gray text-xs font-bold hidden lg:flex items-center"
					variants={heading2Variant}
					animate="visible"
					initial="hidden"
				>
					Press{" "}
					<span className="bg-[#26272f] font-light text-white px-1 mx-1 py-[1px] rounded-[4px] border border-[#32333a]">
						T
					</span>{" "}
					anytime to start trail
				</motion.h4>
				<motion.button
					className="bg-[#17171b] px-10 py-3 rounded-full font-bold hover:bg-[#1e1e22] flex lg:hidden"
					variants={heading2Variant}
					animate="visible"
					initial="hidden"
				>
					Start your free trail
				</motion.button>
			</div>
		</div>
	);
};

export default HeaderText;
