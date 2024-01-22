"use client";
import React, { useRef } from "react";
import { motion, useCycle, Variants, useScroll, useTransform } from "framer-motion";
import bannerStats from "@/public/images/home-UI_4x.d5c9876e.png";
import Image from "next/image";

const duration = 1.2;

const variants: Variants = {
	flip: {
		rotateX: -50,
		scale: 0.5,
		transition: {
			ease: "easeInOut",
			duration: 1.2,
		},
	},
	hidden: {
		rotateX: 0,
		scale: 0.5,
		transition: {
			ease: "easeInOut",
			duration: 1.2,
		},
	},
};

export default function App() {
    const [variant, toggleVariant] = useCycle(...Object.keys(variants));
    const ref = useRef<HTMLDivElement | null >(null)
    const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["1 1", "0 0.7"],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [0, -50])
    

	return (
		<motion.div
			style={{
				perspective: 2000,
				margin: "auto",
			}}
		>
			<motion.div
				ref={ref}
				style={{
					rotateX
				}}
				variants={variants}
				animate={variant}
				onTap={() => toggleVariant()}
			>
				<Image
					src={bannerStats}
					alt="banner image"
					className="rounded-t-lg aspect-auto border"
				></Image>
			</motion.div>
		</motion.div>
	);
}
