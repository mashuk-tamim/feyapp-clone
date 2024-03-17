"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import LoginButton from "./LoginButton";
import TrailButton from "./TrailButton";

const navLinksLg = (
	<div className="flex gap-8 text-[#a3a3a5] text-xs">
		<div>
			<Link href="pricing" className="hover:text-[#e6e6e6]">
				Pricing
			</Link>
		</div>
		<div>
			<Link href="updates" className="hover:text-[#e6e6e6]">
				Updates
			</Link>
		</div>
		<div>
			<Link href="download" className="hover:text-[#e6e6e6]">
				Download
			</Link>
		</div>
	</div>
);
const navLinksMd = (
	<div className="flex gap-8 text-[#a3a3a5] text-xs">
		<div>
			<Link href="pricing">Pricing</Link>
		</div>
		<div>
			<Link href="updates">Updates</Link>
		</div>
	</div>
);

const Navbar = () => {
	return (
		<nav className="w-screen bg-blueLight">
			<nav className="flex justify-between items-center p-8 md:p-10 lg:py-10 lg:px-14 max-w-6xl mx-auto">
				<div className="flex justify-between lg:justify-normal items-center gap-10 w-full lg:w-1/2">
					<div className="flex gap-2 items-center">
						<div className="">
							{/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinejoin="#868F97" stroke-width="1.5" d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"></path>
                            </svg> */}
							<svg
								width="100%"
								height="29"
								viewBox="0 0 18 29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M14.0023 4.86847C14.0023 4.27515 13.7658 3.70609 13.3447 3.2863L11.7281 1.67969L2.31641 11.0521C1.84958 11.5162 1.47921 12.0673 1.22652 12.674C0.973819 13.2808 0.84375 13.9312 0.84375 14.588C0.84375 15.2448 0.973819 15.8952 1.22652 16.502C1.47921 17.1087 1.84958 17.6598 2.31641 18.1238L3.89702 19.7011C3.69238 18.727 3.73484 17.7175 4.02053 16.7639C4.30622 15.8102 4.82614 14.9425 5.53327 14.2393L13.3447 6.45065C13.7658 6.03086 14.0023 5.4618 14.0023 4.86847ZM13.3424 11.0375C13.7649 11.4609 14.0022 12.0347 14.0022 12.6329C14.0022 13.2312 13.7649 13.805 13.3424 14.2284L9.38858 18.1839C8.8241 18.7451 8.37672 19.4129 8.07241 20.1486C7.76811 20.8842 7.61295 21.673 7.61595 22.4692C7.61692 22.8845 7.65997 23.2986 7.74446 23.7053L6.18599 22.1033C5.23793 21.1533 4.70544 19.8658 4.70544 18.5235C4.70544 17.1811 5.23793 15.8936 6.18599 14.9437L11.7279 9.40254L13.3424 11.0375ZM13.3021 22.7473C13.5238 22.9594 13.7 23.2126 13.8202 23.492C13.9405 23.7714 14.0024 24.0714 14.0024 24.3745C14.0024 24.6776 13.9405 24.9776 13.8202 25.257C13.7 25.5365 13.5238 25.7896 13.3021 26.0017L11.6954 27.5671L10.0621 25.9692C9.16557 25.092 8.63499 23.9208 8.57339 22.6831C8.51179 21.4454 8.92357 20.2295 9.72873 19.2716L13.3021 22.7473Z"
									fill="white"
								></path>
							</svg>
						</div>
						<div>
							<h2 className="font-bold text-white flex lg:hidden">
								FEY
							</h2>
						</div>
					</div>
					<div className="">
						<div className="hidden lg:flex">{navLinksLg}</div>
						<div className="flex lg:hidden">{navLinksMd}</div>
					</div>
				</div>
				<div className="hidden md:hidden lg:flex gap-8 items-center text-sm font-medium">
					<LoginButton></LoginButton>
					<TrailButton></TrailButton>
				</div>
			</nav>
		</nav>
	);
};

export default Navbar;
