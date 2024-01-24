"use client";

import Image from "next/image";
import {
	motion,
	useScroll,
	useCycle,
	Variants,
	useMotionValueEvent,
	useAnimation,
	useInView,
    useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import bannerLaptop from "@/public/images/macbook_4x.299ca224.jpg";
import laptopWallpaper from "@/public/images/screen-1_4x.5ab54123cropped.jpg";
import bannerStats from "@/public/images/home-UI_4x.d5c9876e.png";
import bannerStats2 from "@/public/images/canvas-UI_4x.0ca19cc7.png";
import Svg from "@/app/components/Svgs/Svg";

const title = "Immerse yourself";
const text =
	"Dive into financial, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.";
// const duration = 1.5;
// const variants = {
// 	flip: {
// 		rotateX: 0,
// 		scale: 0.5,
// 		y: 0,
// 		transition: {
// 			ease: "easeInOut",
// 			duration,
// 			rotateY: {
// 				delay: duration,
// 				duration,
// 			},
// 		},
// 	},
// 	hidden: {
// 		rotateX: -50,
// 		scale: 1,
// 		y: 0,
// 		transition: {
// 			ease: "easeInOut",
// 			duration,
// 			rotateY: {
// 				delay: duration,
// 				duration,
// 			},
// 		},
// 	},
// };

const Header = () => {
	// const [variant, toggleVariant] = useCycle(...Object.keys(variants));
	const [replace, setReplace] = useState(false);

	const containerRef = useRef(null);
	// const scrollRef = useRef(null);
	const imageRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: imageRef,
		offset: ["1 0.6", "0 0.5"],
	});

	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: containerRef,
		offset: ["0 1", "1 1"],
	});

	console.log(scrollYProgress2.get()); // Log the numeric value

	

	const rotateXProgress = useTransform(
		scrollYProgress1,
		[0, 0, 1],
		[0, 0, -70]
	);

	useMotionValueEvent(scrollYProgress2, "change", (latest) => {
        console.log(latest, replace);
        if (scrollYProgress2.get() === 1) {
			setReplace(true);
		} else {
			setReplace(false);
		}
	});

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
		<section className="bg-blueLight">
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
				ref={imageRef}
				className="relative w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-5 md:pt-10"
				variants={imageVariant}
				animate="visible"
				initial="hidden"
			>
				{/* laptop image */}
				<Image
					src={bannerLaptop}
					alt="banner image"
					className="relative"
				></Image>

				{/* stat image 1 */}
				<motion.div
					style={{
						rotateX: rotateXProgress,
						transformOrigin: "top",
					}}
					ref={containerRef}
					// onTap={() => toggleVariant()}
					className="h-[1300px] md:h-[1700px] lg:h-[1400px] absolute top-[48px] px-2 mx-auto "
				>
					<div className="sticky top-[200px]">
						<Image
							src={bannerStats}
							alt="banner image"
							className={`rounded-t-lg aspect-auto h-[200px] md:h-[314px] lg:h-[430px] ${replace ? "hidden" : "flex"}`}
						></Image>
						<Image
							src={bannerStats2}
							alt="banner image"
							className={`${replace ? "flex" : "hidden"} mx-auto mt-5 z-10 bottom-0 border`}
						></Image>
					</div>
					{/* stat image 2 */}
				</motion.div>
			</motion.div>
			<div className="h-[1300px] md:h-[1700px] lg:h-[1000px]"></div>
			<div className="w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-5 md:pt-10"></div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="w-[60%] mx-auto text-gray text-sm font-medium mt-7">
					{text}
				</p>
			</div>
			<Svg></Svg>
		</section>
	);
};

export default Header;
