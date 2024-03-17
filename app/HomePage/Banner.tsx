"use client";
import React from "react";

const Banner = () => {
	return (
		<section className="bg-blueLight w-screen">
			<div className="max-w-7xl mx-auto">
				<div>
					<HeaderText></HeaderText>
				</div>

				<div className="py-0 my-0">
					<MacBookScroll></MacBookScroll>
				</div>

				<div>
					<BottomText></BottomText>
				</div>
			</div>
		</section>
	);
};

export default Banner;

import Logos from "@/app/components/Logos";

const title = "Immerse yourself";
const text =
	"Dive into financial, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.";

export const BottomText = () => {
	return (
		<div>
			<div className="w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-5 "></div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="w-[60%] mx-auto text-gray text-sm font-medium mt-7">
					{text}
				</p>
			</div>
			<Logos></Logos>
		</div>
	);
};

export const MiddleText = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<div
			ref={ref}
			style={{
				opacity: isInView ? "1" : "0",
				transition: "ease-in-out 1s",
				transitionDelay: "0.5s",
			}}
			className="relative z-0"
		>
			<div className="w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-20"></div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">See the big picture.</h1>
				<p className="w-[60%] mx-auto text-gray text-sm font-medium mt-7">
					Fey offers a streamlined view of real-time market data,
					effortlessly giving you the big picture on your favorite
					companies.
				</p>
			</div>
		</div>
	);
};

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

import { useEffect, useRef, useState } from "react";
import {
	MotionValue,
	motion,
	useInView,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { cn } from "@/utils/cn";
import {
	IconBrightnessDown,
	IconBrightnessUp,
	IconCaretRightFilled,
	IconCaretUpFilled,
	IconChevronUp,
	IconMicrophone,
	IconMoon,
	IconPlayerSkipForward,
	IconPlayerTrackNext,
	IconPlayerTrackPrev,
	IconTable,
	IconVolume,
	IconVolume2,
	IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";
import Image from "next/image";

import laptopWallpaper from "@/public/images/screen-1_4x.5ab54123cropped.jpg";
import bannerStats from "@/public/images/home-UI_4x.d5c9876e.png";
import bannerStats2 from "@/public/images/bannerStat2.png";

export const MacBookScroll = ({
	showGradient,
	badge,
}: {
	src?: string;
	showGradient?: boolean;
	title?: string | React.ReactNode;
	badge?: React.ReactNode;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 0", "1 1"],
	});
	const [replace, setReplace] = useState(false);
	const [IsNotRounded, setIsNotRounded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window && window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		// console.log(scrollYProgress.get()); // Log the numeric value
		// console.log(replace);
		if (scrollYProgress.get() === 1) {
			setReplace(true);
		} else {
			setReplace(false);
		}
		if (scrollYProgress.get() > 0.48) {
			setIsNotRounded(true);
		} else {
			setIsNotRounded(false);
		}
	});

	const scaleX = useTransform(
		scrollYProgress,
		[0, 0.3],
		[1.25, isMobile ? 1 : 1.25]
	);
	const scaleY = useTransform(
		scrollYProgress,
		[0, 0.3],
		[0.6, isMobile ? 1 : 1.25]
	);
	const translate = useTransform(scrollYProgress, [0, 1], [0, 800]);
	const rotate = useTransform(
		scrollYProgress,
		[0.1, 0.12, 0.3],
		[-28, -28, 0]
	);

	return (
		<div
			ref={ref}
			className="min-h-[150vh] md:min-h-[200vh] flex flex-col items-center py-0 md:pt-20 md:pb-0 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.5] sm:scale-50"
		>
			{/* Lid */}
			<div className={`relative z-10 ${replace ? "hidden" : "flex"}`}>
				<Lid
					scaleX={scaleX}
					scaleY={scaleY}
					rotate={rotate}
					translate={translate}
				/>
			</div>
			{/* Base area */}
			<div className="h-[22rem] w-[32rem] bg-gray-200 bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
				{/* above keyboard bar */}
				<div className="h-10 w-full relative bg-[#272729]">
					<div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
				</div>
				<div className="flex relative bg-[#272729]">
					<div className="mx-auto w-[10%] overflow-hidden  h-full">
						<SpeakerGrid />
					</div>
					<div className="mx-auto w-[80%] h-full">
						<Keypad />
					</div>
					<div className="mx-auto w-[10%] overflow-hidden  h-full">
						<SpeakerGrid />
					</div>
				</div>
				<TrackPad />
				<div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
				{showGradient && (
					<div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
				)}
				{badge && (
					<div className="absolute bottom-4 left-4">{badge}</div>
				)}
			</div>
			<div className="h-[100vh] flex flex-col justify-between items-center">
				<div>
					<MiddleText></MiddleText>
				</div>
                <motion.div className="" animate={{
                    opacity: replace ? 1 : 0,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut",
                    }
                }}>
					<Image
						src={bannerStats2}
						alt="Banner statistics 2"
						className={`h-96 w-[32rem] relative top-36 ${
							isMobile ? "scale-100" : "scale-y-125 scale-x-125"
                            } `}
                    
					></Image>
				</motion.div>
			</div>
		</div>
	);
};

export const Lid = ({
	scaleX,
	scaleY,
	rotate,
	translate,
}: {
	scaleX: MotionValue<number>;
	scaleY: MotionValue<number>;
	rotate: MotionValue<number>;
	translate: MotionValue<number>;
}) => {
	return (
		<div className="relative flex flex-col [perspective:800px]">
			<div
				style={{
					transform:
						"perspective(800px) rotateX(-25deg) translateZ(0px)",
					transformOrigin: "bottom",
					transformStyle: "preserve-3d",
				}}
				className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
			>
				<div
					style={{
						boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
					}}
					className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
				>
					<span className="text-white">
						<Image
							src={laptopWallpaper}
							alt="wallpaper"
							className="relative -top-[7px]"
						></Image>
					</span>
				</div>
			</div>
			<motion.div
				style={{
					scaleX: scaleX,
					scaleY: scaleY,
					rotateX: rotate,
					translateY: translate,
					transformStyle: "preserve-3d",
					transformOrigin: "top",
				}}
				className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
			>
				<div className="absolute inset-0 bg-[#272729] rounded-lg" />
				<Image
					src={bannerStats}
					alt="statistics"
					fill
					className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
				/>
			</motion.div>
		</div>
	);
};

export const TrackPad = () => {
	return (
		<div
			className="w-[40%] mx-auto h-32  rounded-xl my-1 bg-[#272729]"
			style={{
				boxShadow: "0px 0px 1px 1px #00000020 inset",
			}}
		></div>
	);
};

export const Keypad = () => {
	return (
		<div className="h-full rounded-md bg-[#050505] mx-1 p-1">
			{/* First Row */}
			<Row>
				<KBtn
					className="w-10 items-end justify-start pl-[4px] pb-[2px]"
					childrenClassName="items-start"
				>
					esc
				</KBtn>
				<KBtn>
					<IconBrightnessDown className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F1</span>
				</KBtn>

				<KBtn>
					<IconBrightnessUp className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F2</span>
				</KBtn>
				<KBtn>
					<IconTable className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F3</span>
				</KBtn>
				<KBtn>
					<IconSearch className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F4</span>
				</KBtn>
				<KBtn>
					<IconMicrophone className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F5</span>
				</KBtn>
				<KBtn>
					<IconMoon className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F6</span>
				</KBtn>
				<KBtn>
					<IconPlayerTrackPrev className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F7</span>
				</KBtn>
				<KBtn>
					<IconPlayerSkipForward className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F8</span>
				</KBtn>
				<KBtn>
					<IconPlayerTrackNext className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F8</span>
				</KBtn>
				<KBtn>
					<IconVolume3 className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F10</span>
				</KBtn>
				<KBtn>
					<IconVolume2 className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F11</span>
				</KBtn>
				<KBtn>
					<IconVolume className="h-[6px] w-[6px]" />
					<span className="inline-block mt-1">F12</span>
				</KBtn>
				<KBtn>
					<div className="h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px">
						<div className="bg-black h-full w-full rounded-full" />
					</div>
				</KBtn>
			</Row>

			{/* Second row */}
			<Row>
				<KBtn>
					<span className="block">~</span>
					<span className="block mt-1">`</span>
				</KBtn>

				<KBtn>
					<span className="block ">!</span>
					<span className="block">1</span>
				</KBtn>
				<KBtn>
					<span className="block">@</span>
					<span className="block">2</span>
				</KBtn>
				<KBtn>
					<span className="block">#</span>
					<span className="block">3</span>
				</KBtn>
				<KBtn>
					<span className="block">$</span>
					<span className="block">4</span>
				</KBtn>
				<KBtn>
					<span className="block">%</span>
					<span className="block">5</span>
				</KBtn>
				<KBtn>
					<span className="block">^</span>
					<span className="block">6</span>
				</KBtn>
				<KBtn>
					<span className="block">&</span>
					<span className="block">7</span>
				</KBtn>
				<KBtn>
					<span className="block">*</span>
					<span className="block">8</span>
				</KBtn>
				<KBtn>
					<span className="block">(</span>
					<span className="block">9</span>
				</KBtn>
				<KBtn>
					<span className="block">)</span>
					<span className="block">0</span>
				</KBtn>
				<KBtn>
					<span className="block">&mdash;</span>
					<span className="block">_</span>
				</KBtn>
				<KBtn>
					<span className="block">+</span>
					<span className="block"> = </span>
				</KBtn>
				<KBtn
					className="w-10 items-end justify-end pr-[4px] pb-[2px]"
					childrenClassName="items-end"
				>
					delete
				</KBtn>
			</Row>

			{/* Third row */}
			<Row>
				<KBtn
					className="w-10 items-end justify-start pl-[4px] pb-[2px]"
					childrenClassName="items-start"
				>
					tab
				</KBtn>
				<KBtn>
					<span className="block">Q</span>
				</KBtn>

				<KBtn>
					<span className="block">W</span>
				</KBtn>
				<KBtn>
					<span className="block">E</span>
				</KBtn>
				<KBtn>
					<span className="block">R</span>
				</KBtn>
				<KBtn>
					<span className="block">T</span>
				</KBtn>
				<KBtn>
					<span className="block">Y</span>
				</KBtn>
				<KBtn>
					<span className="block">U</span>
				</KBtn>
				<KBtn>
					<span className="block">I</span>
				</KBtn>
				<KBtn>
					<span className="block">O</span>
				</KBtn>
				<KBtn>
					<span className="block">P</span>
				</KBtn>
				<KBtn>
					<span className="block">{`{`}</span>
					<span className="block">{`[`}</span>
				</KBtn>
				<KBtn>
					<span className="block">{`}`}</span>
					<span className="block">{`]`}</span>
				</KBtn>
				<KBtn>
					<span className="block">{`|`}</span>
					<span className="block">{`\\`}</span>
				</KBtn>
			</Row>

			{/* Fourth Row */}
			<Row>
				<KBtn
					className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
					childrenClassName="items-start"
				>
					caps lock
				</KBtn>
				<KBtn>
					<span className="block">A</span>
				</KBtn>

				<KBtn>
					<span className="block">S</span>
				</KBtn>
				<KBtn>
					<span className="block">D</span>
				</KBtn>
				<KBtn>
					<span className="block">F</span>
				</KBtn>
				<KBtn>
					<span className="block">G</span>
				</KBtn>
				<KBtn>
					<span className="block">H</span>
				</KBtn>
				<KBtn>
					<span className="block">J</span>
				</KBtn>
				<KBtn>
					<span className="block">K</span>
				</KBtn>
				<KBtn>
					<span className="block">L</span>
				</KBtn>
				<KBtn>
					<span className="block">{`:`}</span>
					<span className="block">{`;`}</span>
				</KBtn>
				<KBtn>
					<span className="block">{`"`}</span>
					<span className="block">{`'`}</span>
				</KBtn>
				<KBtn
					className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
					childrenClassName="items-end"
				>
					return
				</KBtn>
			</Row>

			{/* Fifth Row */}
			<Row>
				<KBtn
					className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
					childrenClassName="items-start"
				>
					shift
				</KBtn>
				<KBtn>
					<span className="block">Z</span>
				</KBtn>
				<KBtn>
					<span className="block">X</span>
				</KBtn>
				<KBtn>
					<span className="block">C</span>
				</KBtn>
				<KBtn>
					<span className="block">V</span>
				</KBtn>
				<KBtn>
					<span className="block">B</span>
				</KBtn>
				<KBtn>
					<span className="block">N</span>
				</KBtn>
				<KBtn>
					<span className="block">M</span>
				</KBtn>
				<KBtn>
					<span className="block">{`<`}</span>
					<span className="block">{`,`}</span>
				</KBtn>
				<KBtn>
					<span className="block">{`>`}</span>
					<span className="block">{`.`}</span>
				</KBtn>{" "}
				<KBtn>
					<span className="block">{`?`}</span>
					<span className="block">{`/`}</span>
				</KBtn>
				<KBtn
					className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
					childrenClassName="items-end"
				>
					shift
				</KBtn>
			</Row>

			{/* sixth Row */}
			<Row>
				<KBtn
					className=""
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-end w-full pr-1">
						<span className="block">fn</span>
					</div>
					<div className="flex justify-start w-full pl-1">
						<IconWorld className="h-[6px] w-[6px]" />
					</div>
				</KBtn>
				<KBtn
					className=""
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-end w-full pr-1">
						<IconChevronUp className="h-[6px] w-[6px]" />
					</div>
					<div className="flex justify-start w-full pl-1">
						<span className="block">control</span>
					</div>
				</KBtn>
				<KBtn
					className=""
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-end w-full pr-1">
						<OptionKey className="h-[6px] w-[6px]" />
					</div>
					<div className="flex justify-start w-full pl-1">
						<span className="block">option</span>
					</div>
				</KBtn>
				<KBtn
					className="w-8"
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-end w-full pr-1">
						<IconCommand className="h-[6px] w-[6px]" />
					</div>
					<div className="flex justify-start w-full pl-1">
						<span className="block">command</span>
					</div>
				</KBtn>
				<KBtn className="w-[8.2rem]"></KBtn>
				<KBtn
					className="w-8"
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-start w-full pl-1">
						<IconCommand className="h-[6px] w-[6px]" />
					</div>
					<div className="flex justify-start w-full pl-1">
						<span className="block">command</span>
					</div>
				</KBtn>
				<KBtn
					className=""
					childrenClassName="h-full justify-between py-[4px]"
				>
					<div className="flex justify-start w-full pl-1">
						<OptionKey className="h-[6px] w-[6px]" />
					</div>
					<div className="flex justify-start w-full pl-1">
						<span className="block">option</span>
					</div>
				</KBtn>
				<div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
					<KBtn className="w-6 h-3">
						<IconCaretUpFilled className="h-[6px] w-[6px]" />
					</KBtn>
					<div className="flex">
						<KBtn className="w-6 h-3">
							<IconCaretLeftFilled className="h-[6px] w-[6px]" />
						</KBtn>
						<KBtn className="w-6 h-3">
							<IconCaretDownFilled className="h-[6px] w-[6px]" />
						</KBtn>
						<KBtn className="w-6 h-3">
							<IconCaretRightFilled className="h-[6px] w-[6px]" />
						</KBtn>
					</div>
				</div>
			</Row>
		</div>
	);
};
export const KBtn = ({
	className,
	children,
	childrenClassName,
	backlit = true,
}: {
	className?: string;
	children?: React.ReactNode;
	childrenClassName?: string;
	backlit?: boolean;
}) => {
	return (
		<div
			className={cn(
				"p-[0.5px] rounded-[4px]",
				backlit && "bg-white/[0.2] shadow-xl shadow-white"
			)}
		>
			<div
				className={cn(
					"h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
					className
				)}
				style={{
					boxShadow:
						"0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
				}}
			>
				<div
					className={cn(
						"text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
						childrenClassName,
						backlit && "text-white"
					)}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export const Row = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
			{children}
		</div>
	);
};

export const SpeakerGrid = () => {
	return (
		<div
			className="flex px-[0.5px] gap-[2px] mt-2 h-40 bg-[#272729]"
			style={{
				backgroundImage:
					"radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
				backgroundSize: "3px 3px",
			}}
		></div>
	);
};

export const OptionKey = ({ className }: { className: string }) => {
	return (
		<svg
			fill="none"
			version="1.1"
			id="icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			className={className}
		>
			<rect
				stroke="currentColor"
				strokeWidth={2}
				x="18"
				y="5"
				width="10"
				height="2"
			/>
			<polygon
				stroke="currentColor"
				strokeWidth={2}
				points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
			/>
			<rect
				id="_Transparent_Rectangle_"
				className="st0"
				width="32"
				height="32"
				stroke="none"
			/>
		</svg>
	);
};
