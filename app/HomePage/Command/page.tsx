import Image from "next/image";
import React from "react";
import keyboard from "@/public/images/keyboard_4x.fac19d71.jpg";
import keys from "@/public/images/keyboard-keys_4x.d1cec86a.png";
import apple from "@/public/images/pngegg.png";
import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";

const Search = () => {
	return (
		<section className="px-16 space-y-32 bg-[#0e0e13]">
			<div>
				<div className="flex">
					<h2 className="text-3xl font-bold bg-headline-gradient inline-block text-transparent bg-clip-text w-[55%]">
						Always at your command.
					</h2>
					<p className="text-gray font-semibold w-[45%]">
						The Fey Command lets you have full control at your
						fingertips. Manage your portfolio, view transactions and
						execute real-time orders in seconds, all without ever
						touching your mouse.
					</p>
				</div>
			</div>
			<div className="flex">
				<div className="relative w-[60%]">
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
				<div className="w-[40%] h-[300px] bg-black border">
					<div className="p-7 border-b border-gray-950 space-y-7">
						<div className="flex gap-3">
							<Image
								src={apple}
								alt=""
								className="size-6 border-[#000000] rounded-md p-1"
							></Image>
							<p className="text-gray text-xs font-bold bg-[#1a1b20] py-1 px-3 rounded-sm">
								AAPL:<span className="font-medium">NASDAQ</span>
							</p>
						</div>
						<div className="">
							<input
								type="text"
								className="bg-black caret-[#479ffa] focus:outline-none text-xl font-medium"
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
