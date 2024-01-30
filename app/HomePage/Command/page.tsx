"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import keyboard from "@/public/images/keyboard_4x.fac19d71.jpg";
import keys from "@/public/images/keyboard-keys_4x.d1cec86a.png";
// import apple from "@/public/images/pngEgg.png";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Search = () => {
	const [prevValue, setPrevValue] = useState(0);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	// const searchRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["0 1", "1 1"],
	});
	useEffect(() => {
		// Focus on the input element after the component has mounted
		console.log(inputRef?.current?.value);
	}, []);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		console.log("Current value:", scrollYProgress.get()); // Log the numeric value
		setPrevValue(latest);
		console.log("Previous value:", prevValue);
		if (inputRef.current && latest >= 0 && latest <= 1) {
			// const length = inputRef.current.value.length;
			// inputRef.current.focus();
			// inputRef.current.setSelectionRange(length, length);
		}
		if (inputRef.current) {
			if (latest > 0.4 && latest <= 0.47) {
				inputRef.current.value = "";
				const length = inputRef.current.value.length;
				inputRef.current.focus();
				inputRef.current.setSelectionRange(length, length);
			} else if (latest > 0.47 && latest < 0.55) {
				inputRef.current.value = "s";
			} else if (latest > 0.55 && latest < 0.63) {
				inputRef.current.value = "se";
			} else if (latest > 0.63 && latest < 0.70) {
				inputRef.current.value = "sea";
			} else if (latest > 0.7 && latest < 0.77) {
				inputRef.current.value = "sear";
			} else if (latest > 0.77 && latest < 0.84) {
				inputRef.current.value = "searc";
			} else if (latest > 0.4 && latest <= 1) {
				inputRef.current.value = "search";
            }
            else {
                inputRef.current.value = "";
            }
		}
	});

	return (
		<div className="h-[200vh] ">
			<motion.div ref={containerRef} className="h-full">
				<div></div>
				<div className="sticky top-0 p-5 md:p-24 space-y-6 md:space-y-32 bg-[#0e0e13] overflow-hidden">
					<div>
						<div className="flex flex-col lg:flex-row md:gap-5 lg:gap-20">
							<h2 className="text-4xl font-bold bg-headline-gradient inline-block text-transparent bg-clip-text w-full lg:w-[55%]">
								Always at your command.
							</h2>
							<p className="text-gray font-bold w-full md:w-[90%] lg:w-[45%] mt-5 md:mt-0">
								The Fey Command lets you have full control at
								your fingertips. Manage your portfolio, view
								transactions and execute real-time orders in
								seconds, all without ever touching your mouse.
							</p>
						</div>
					</div>
					<div className="w-screen">
						<div className="relative scale-150 md:scale-125 lg:scale-100 lg:w-4/5 left-[93px] lg:left-0 md:right-32 lg:right-0">
							<Image
								src={keyboard}
								alt="keyboard"
								className="absolute top-0 left-0"
							></Image>
							<Image
								src={keys}
								alt="keys"
								className="absolute top-0 left-0"
							></Image>
						</div>
						<div className="w-[350px] md:w-[300px] lg:w-[400px] h-[300px] md:h-[280px] lg:h-[350px] bg-black relative top-0 left-20 md:left-[408px] lg:left-[680px] overflow-hidden drop-shadow-xl shadow-2xl shadow-black">
							<div className="p-7 border-b border-[#202020] space-y-4">
								<div className="flex items-center gap-1">
									{/* <Image
										src={apple}
										alt=""
										className="size-4 border-[#000000] rounded-md p-1"
									></Image> */}
									<div className="text-gray text-[6px] font-bold bg-[#1a1b20] rounded-sm">
										AAPL:
										<span className="font-medium">
											NASDAQ
										</span>
									</div>
								</div>
								<div className="">
									<input
										ref={inputRef}
										type="text"
										placeholder="Search commands"
										className="bg-black caret-[#479ffa] focus:outline-none text-base font-medium placeholder:font-thin"
										defaultValue=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Search;
