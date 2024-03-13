"use client"
import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import watchList from "@/public/images/watchlist_4x.f3cfae5a.png";
import watchList2 from "@/public/images/macbook-positions_4x.434c9984.png";
import research from "@/public/images/canvas-mobile_4x.596d91632222.png";
import Image from "next/image";


const title = "Everything, unlike anything.";
const text =
	"Whether you're an armchair investor or a Wall Street aficionado, Fey is designed to keep you informed with real-time market data and advanced analysis tools.";

const Page = () => {
	const pageRef1 = useRef<HTMLDivElement | null>(null);
	const pageRef2 = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: pageRef1,
		offset: ["center end", "start start"],
    });
	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: pageRef2,
		offset: ["center end", "end start"],
    });
    const opacity1 = useTransform(scrollYProgress1, [0, 0.5, 1], [0.3, 1, 0.3])
    const opacity2 = useTransform(scrollYProgress2, [0, 0.5, 1], [0.3, 1, 0.3])
	return (
		<section className="px-5 md:px-20 lg:pl-16">
			<div className="space-y-20">
				<div className="">
					<ComponentTitle title={title} text={text}></ComponentTitle>
				</div>
				{/* First card */}
				<motion.div>
					<div className="flex flex-col lg:flex-row md:h-auto lg:h-[320px]">
						<motion.div
							className="md:w-full lg:w-[40%]"
							ref={pageRef1}
							style={{
								opacity: opacity1,
							}}
						>
							<p className="text-gray font-bold p-10 lg:sticky lg:top-[35%]">
								<span className="text-white">
									Track your stocks
								</span>{" "}
								and scout for potential investment
								opportunities. Our advanced watch list
								effortlessly keeps you updated with earnings
								dates and performance indicators.
							</p>
						</motion.div>
						<div className="w-full lg:w-[60%] lg:relative">
							<Image
								src={watchList}
								alt="charts image"
								className="hidden lg:flex absolute object-cover object-left w-full h-full"
							></Image>
							<Image
								src={watchList2}
								alt="charts image 2"
								className="w-4/5 mx-auto h-full"
							></Image>
							<div className="bg-gradient-to-l from-black from-[-10%] absolute top-0 h-full w-full object-cover"></div>
						</div>
					</div>
				</motion.div>
				{/* second card */}
				<motion.div className="flex flex-col lg:flex-row md:h-auto lg:h-[130vh] pt-0 lg:pt-20">
					<motion.div
						className="md:w-full lg:w-[40%]"
						ref={pageRef2}
						style={{
							opacity: opacity2,
						}}
					>
						<p className="text-gray font-bold p-10 lg:sticky lg:top-[35%]">
							<span className="text-white">Research</span> is all
							about quality of data and accuracy. Unlike most
							financial apps, our asset pages are carefully
							curated to remove the noise, while still giving you
							access to rich market intelligence from a single
							keypress. <br />
							<span className="text-blue underline font-bold">
								Learn more
							</span>
						</p>
					</motion.div>
					<div className="w-full lg:w-[60%] lg:relative space-y-10">
						<Image
							src={research}
							alt="charts image"
							className="static lg:absolute lg:object-cover lg:object-left w-4/5 mx-auto lg:w-full h-full round"
						></Image>
						<Image
							src={watchList2}
							alt="charts image 2"
							className="w-4/5 mx-auto h-full flex lg:hidden"
						></Image>
						<div className="hidden lg:flex bg-gradient-to-tl from-black from-[-20%] absolute h-full w-full object-cover"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Page;
