import Link from 'next/link';
import React from 'react';

const footerLinks = (
	<div className="flex gap-3 lg:gap-8 justify-center">
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
		<div>
			<Link href="privacyPolicy" className="hover:text-[#e6e6e6]">
				Privacy Policy
			</Link>
		</div>
		<div>
			<Link href="terms" className="hover:text-[#e6e6e6]">
				Terms of Use
			</Link>
		</div>
	</div>
);

const Page = () => {
    return (
		<footer className="w-full mx-auto text-[#676e75] text-[10px] lg:text-xs font-medium flex flex-col-reverse items-center gap-5 md:flex-row justify-between px-5 lg:px-20 py-10 bg-blueLight">
			<div>
				<p>&#169; 2024, Fey Labs Inc.</p>
			</div>
			<div>{footerLinks}</div>
		</footer>
	);
};

export default Page;