import ComponentTitle from '@/app/components/ComponentTitle/ComponentTitle';
import Image from 'next/image';
import liveSync from '@/public/images/livesync-on_2x.a6b17784.jpg'
import React from 'react';
const title = "Real-time data";
const text =
    "Access ad-free, uninterrupted data directly from trusted sources. With our zero-delay market updates, you'll always stay ahead of the curve";
const page = () => {
    return (
		<div>
			<div>
				<ComponentTitle title={title} text={text}></ComponentTitle>
			</div>
			<div className="w-[85%] mx-auto bg-radial-gradient relative">
                <Image src={liveSync} alt="liveSync" className=""></Image>
                <div className='w-full h-full bg-radial-gradient absolute top-0 left-0'></div>
            </div>
		</div>
	);
};

export default page;