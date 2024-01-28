import React from 'react';
import Svg from "@/app/components/Svgs/Svg";

const title = "Immerse yourself";
const text =
    "Dive into financial, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.";
    
const BottomText = () => {
    return (
		<div>
			<div className="w-[320px] md:w-[500px] lg:w-[680px] mx-auto pt-5 md:pt-20"></div>
			<div className="text-center">
				<h1 className="text-3xl font-bold">{title}</h1>
				<p className="w-[60%] mx-auto text-gray text-sm font-medium mt-7">
					{text}
				</p>
			</div>
			<Svg></Svg>
		</div>
	);
};

export default BottomText;