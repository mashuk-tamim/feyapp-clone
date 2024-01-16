import Link from 'next/link';
import React from 'react';

const footerLinks = (
	<div className="flex gap-3 lg:gap-8 justify-center">
		<div>
			<Link href="pricing">Pricing</Link>
		</div>
		<div>
			<Link href="updates">Updates</Link>
		</div>
		<div>
			<Link href="download">Download</Link>
		</div>
		<div>
			<Link href="privacyPolicy">Privacy Policy</Link>
		</div>
		<div>
			<Link href="terms">Terms of Use</Link>
		</div>
	</div>
);

const page = () => {
    return (
		<footer className="w-full mx-auto text-[#676e75] text-[10px] lg:text-xs font-medium flex flex-col-reverse items-center gap-5 md:flex-row justify-between px-5 lg:px-20 py-10 bg-blueLight">
			<div>
				<p>&#169; 2024, Fey Labs Inc.</p>
			</div>
			<div>{footerLinks}</div>
		</footer>
	);
};

export default page;