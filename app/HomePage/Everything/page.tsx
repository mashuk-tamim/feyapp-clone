import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";
import React from "react";
import watchlist from "@/public/images/watchlist_4x.f3cfae5a.png";
import research from "@/public/images/canvas-mobile_4x.596d91632222.png";
import Image from "next/image";

const title = "Everything, unlike anything.";
const text =
	"Whether you're an armchair investor or a Wall Street aficionado, Fey is designed to keep you informed with real-time market data and advanced analysis tools.";

const page = () => {
	return (
		<section className="pl-16">
			<div className="space-y-20">
				<div className="">
					<ComponentTitle title={title} text={text}></ComponentTitle>
				</div>
				<div>
					<div className="flex h-[320px]">
						<div className="w-[40%]">
							<p className="text-gray font-bold p-10 sticky top-[35%]">
								<span className="text-white">
									Track your stocks
								</span>{" "}
								and scout for potential investment
								opportunities. Our advanced watchlist
								effortlessly keeps you updated with earnings
								dates and performance indicators.
							</p>
						</div>
						<div className="w-[60%] relative">
							<Image
								src={watchlist}
								alt="charts image"
								className="absolute object-cover object-left w-full h-full round"
							></Image>
							<div className="bg-gradient-to-l from-black absolute h-full w-full  object-cover"></div>
						</div>
					</div>
				</div>
				<div className="flex h-[130vh] pt-20">
					<div className="w-[40%]">
						<p className="text-gray font-bold p-10 sticky top-[35%]">
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
					</div>
					<div className="w-[60%] relative">
						<Image
							src={research}
							alt="charts image"
							className="absolute object-cover object-left w-full h-full round"
						></Image>
						<div className="bg-gradient-to-tl from-black from-[-20%] absolute h-full w-full  object-cover"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
