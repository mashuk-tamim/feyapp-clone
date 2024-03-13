"use client"
import ComponentTitle from '@/app/components/ComponentTitle/ComponentTitle';
import Image from 'next/image';
import liveSync from '@/public/images/livesync-on_2x.a6b17784.jpg'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform,useInView } from "framer-motion";
const title = "Real-time data";
const text =
    "Access ad-free, uninterrupted data directly from trusted sources. With our zero-delay market updates, you'll always stay ahead of the curve";
const Page = () => {
    const ref = useRef<HTMLImageElement | null>(null);
    const isInView = useInView(ref, { once: false });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["center end", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
    return (
		<section className="px-5 md:px-0">
			<div>
				<ComponentTitle title={title} text={text}></ComponentTitle>
			</div>
			<motion.div
				className="w-[85%] mx-auto bg-radial-gradient relative"
				ref={ref}
				style={{
                    opacity: opacity,
                    // filter: isInView ? "grayscale(0%)" : "grayscale(50%)",
                    // filter: isInView ? "grayscale(100%)" : "grayscale(100%)",
                    // transitionDuration: "0.5s",
                    // transitionDelay: "0.5s"
				}}
			>
				<Image src={liveSync} alt="liveSync" className={`${isInView ? "grayscale-0" : "grayscale"}  delay-500 duration-1000`}></Image>
				<div className={`w-full h-full bg-radial-gradient absolute top-0 left-0 `}></div>
			</motion.div>
		</section>
	);
};

export default Page;