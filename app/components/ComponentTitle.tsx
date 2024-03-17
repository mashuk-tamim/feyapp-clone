"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ComponentTitleProps {
	title: string;
	text: string;
}

const ComponentTitle: React.FC<ComponentTitleProps> = ({ title, text }) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
	return (
		<motion.div
			ref={ref}
			className="text-center space-y-4 md:space-y-6 lg:space-y-10"
			style={{
				opacity,
			}}
		>
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="w-full md:w-4/5 lg:w-[65%] mx-auto text-gray text-sm">
				{text}
			</p>
		</motion.div>
	);
};

export default ComponentTitle;
