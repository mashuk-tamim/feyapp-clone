import Image from "next/image";
import React from "react";
import keyboard from "@/public/images/keyboard_4x.fac19d71.jpg";
import keys from "@/public/images/keyboard-keys_4x.d1cec86a.png";
import apple from "@/public/images/pngegg.png";
import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";

const Search = () => {
	return (
		<section className="p-5 md:p-24 space-y-6 md:space-y-32 bg-[#0e0e13] overflow-hidden">
			<div>
				<div className="flex flex-col lg:flex-row md:gap-5 lg:gap-20">
					<h2 className="text-4xl font-bold bg-headline-gradient inline-block text-transparent bg-clip-text w-full lg:w-[55%]">
						Always at your command.
					</h2>
					<p className="text-gray font-bold w-full md:w-[90%] lg:w-[45%] mt-5 md:mt-0">
						The Fey Command lets you have full control at your
						fingertips. Manage your portfolio, view transactions and
						execute real-time orders in seconds, all without ever
						touching your mouse.
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
				<div className="w-[350px] md:w-[300px] lg:w-[400px] h-[300px] md:h-[280px] lg:h-[350px] bg-black relative top-0 left-20 md:left-[408px] lg:left-[680px] border overflow-hidden">
					<div className="p-7 border-b border-gray-950 space-y-7">
						<div className="flex items-center gap-1">
							<Image
								src={apple}
								alt=""
								className="size-4 border-[#000000] rounded-md p-1"
							></Image>
							<div className="text-gray text-[6px] font-bold bg-[#1a1b20] rounded-sm">
								AAPL:<span className="font-medium">NASDAQ</span>
							</div>
						</div>
						<div className="">
							<input
								type="text"
								className="bg-black caret-[#479ffa] focus:outline-none text-lg font-medium"
								defaultValue="search"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
