"use client";
import {
	motion,
	useScroll,
	useMotionValueEvent,
	useTransform,
	easeInOut,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import bannerLaptop from "@/public/images/macbook_4x.299ca224.jpg";
import laptopWallpaper from "@/public/images/screen-1_4x.5ab54123cropped.jpg";
import bannerStats from "@/public/images/home-UI_4x.d5c9876e.png";
import bannerStats2 from "@/public/images/canvas-UI_4x.0ca19cc7.png";
import Image from "next/image";

const HeaderImage = () => {
	// const [variant, toggleVariant] = useCycle(...Object.keys(variants));
	const [replace, setReplace] = useState(false);
	const [isNotRounded, setIsNotRounded] = useState(false);

	const containerRef = useRef(null);
	const imageRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: imageRef,
		offset: ["1 0.6", "0 0.5"],
	});

	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: containerRef,
		offset: ["0 1", "1 1"],
	});

	const rotateXProgress = useTransform(
		scrollYProgress1,
		[0, 0, 1],
		[0, 0, -78]
	);

	useMotionValueEvent(scrollYProgress2, "change", (latest) => {
		// console.log(scrollYProgress2.get()); // Log the numeric value
		// console.log(replace);
		if (scrollYProgress2.get() === 1) {
			setReplace(true);
		} else {
			setReplace(false);
		}
		if (scrollYProgress2.get() > 0.48) {
			setIsNotRounded(true);
		} else {
			setIsNotRounded(false);
		}
	});
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
		<div className="">
			<motion.div
				style={{
					perspective: 2000,
					margin: "auto",
				}}
				ref={imageRef}
				className="relative w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-5 md:pt-10 "
				variants={imageVariant}
				animate="visible"
				initial="hidden"
			>
				{/* laptop image */}
				<Image
					src={bannerLaptop}
					alt="banner image"
					className="relative"
					priority
				></Image>
				<Image
					src={laptopWallpaper}
					alt="wallpaper"
					className="absolute top-[48px]"
					style={{
						transform: "rotateX(20deg)",
						transformOrigin: "top",
					}}
					priority
				></Image>

				<motion.div
					style={{
						rotateX: rotateXProgress,
						transformOrigin: "top",
					}}
					ref={containerRef}
					className="h-[1300px] md:h-[1700px] lg:h-[1400px] absolute top-[48px] px-1 mx-auto   border-red-500"
				>
					<div className="sticky top-[200px]">
						<motion.div>
							{/* stat image 1 */}
							<Image
								src={bannerStats}
								alt="banner image"
								className={`${
									isNotRounded
										? "rounded-none"
										: "rounded-t-xl"
								} aspect-auto h-[200px] md:h-[314px] lg:h-[430px] ${
									replace ? "hidden" : "flex"
								} z-10`}
								priority
							></Image>
						</motion.div>
						<motion.div
							animate={{
								opacity: replace ? 1 : 0,
								transition: {
									duration: 0.5,
									ease: easeInOut,
								},
							}}
							initial={{
								opacity: 0,
							}}
						>
                            {/* stat image 2 */}
							<Image
								src={bannerStats2}
								alt="banner image"
								className={`${
									replace ? "flex" : "hidden"
								} mx-auto mt-5 z-10 bottom-0 border transition ease-in-out duration-500`}
								priority
							></Image>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>
			<div className="h-[1300px] md:h-[1700px] lg:h-[1040px]"></div>
		</div>
	);
};

export default HeaderImage;
