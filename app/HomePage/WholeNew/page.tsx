import Image from 'next/image';
import React from 'react';
import macClosed from '@/public/images/laptop-closed-off_4x.434654c4-PhotoRoom.png'
import macLogoNotHovered from '@/public/images/apple-unhovered_4x.f4daffa8.png'
import macLogoHovered from '@/public/images/apple-hovered_4x.981e3b1f.png'

const page = () => {
    return (
		<section className='bg-blueLight pt-40'>
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold bg-headline-gradient text-transparent bg-clip-text inline-block">
					A whole new
				</h2>
				<h2 className="text-3xl font-bold bg-headline-gradient text-transparent bg-clip-text inline-block">
					take on research.
				</h2>
			</div>
			<div className="flex justify-center mt-7">
				<button className="border rounded-full px-14 py-2 hover:bg-white hover:text-black font-semibold text-xs">
					Try it free
				</button>
			</div>
			<div className="relative mt-32 w-[80%] mx-auto">
				<Image
					src={macClosed}
					alt="mac closed"
					className="border"
				></Image>
				<Image
					src={macLogoNotHovered}
					alt="not hovered mac"
					className="absolute top-0 left-0"
				></Image>
                <Image src={macLogoHovered} alt="hovered mac"
                className='hidden absolute top-0 left-0'></Image>
			</div>
		</section>
	);
};

export default page;