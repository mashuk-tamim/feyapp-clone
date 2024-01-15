import Link from 'next/link';
import React from 'react';

const footerLinks = (
	<div className="flex gap-8">
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
		<footer className="text-[#676e75] text-xs font-medium flex justify-between px-20 py-10 bg-blueLight">
			<div>
				<p>&#169; 2024, Fey Labs Inc.</p>
			</div>
			<div>{footerLinks}</div>
		</footer>
	);
};

export default page;