import React from "react";

const Header = () => {
	return (
		<section>
			<div className="flex flex-col justify-center items-center space-y-7 w-3/5 mx-auto text-center">
				<h3 className="uppercase bg-gradient-to-r from-[#9891ba] via-[#c07d91] to-[#947e99] inline-block text-transparent bg-clip-text font-semibold">
					Now Available to Everyone
				</h3>
				<h1 className="text-3xl font-bold">
					The definitive research tool for the modern investor.
				</h1>
				<h4 className="text-[#868f97] text-xs font-bold">
					Press{" "}
					<span className="bg-[#26272f] font-light text-white px-1 py-[1px] rounded-[4px] border border-[#32333a]">
						T
					</span>{" "}
					anytime to start trail
				</h4>
            </div>
            <div>
                
            </div>
		</section>
	);
};

export default Header;
