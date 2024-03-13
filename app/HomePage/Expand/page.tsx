import ComponentTitle from "@/app/components/ComponentTitle/ComponentTitle";
import Image from "next/image";
import React from "react";
import macPC from "@/public/images/screen-body_4x.1853b79f.png"
import macNav from "@/public/images/screen-nav_4x.e6686092.png"
import stockScreener from "@/public/images/screener_4x.83818e76.jpeg"

const title = "Expand what's possible";
const text =
	"Our Screener lets you quickly sift through thousands of stock data points in seconds, all without the need for a single mouse click.";

const Page = () => {
	return (
		<section className="px-5 md:px-20 space-y-20">
			<div>
				<ComponentTitle title={title} text={text} />
			</div>
			<div className=" w-[78%] mx-auto relative">
				<Image src={macPC} alt="" className="border"></Image>
				<Image
					src={stockScreener}
					alt=""
					className="absolute top-0 left-0 border"
				></Image>
				<Image
					src={macNav}
					alt=""
					className="absolute -top-3 left-0 border"
				></Image>
			</div>
		</section>
	);
};

export default Page;
