"use client"
import React from 'react';

const LoginButton = () => {
    return (
		<div>
			<button className="flex gap-2 items-center text-[10px] font-bold">
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="sc-2d2b0f13-5 gDcOZS"
				>
					<path
						d="M6.235 19.305c.19-.457.364-.921.523-1.394m7.666 3.09a29.67 29.67 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.398 3.58M3.262 15.155c.323-1.332.494-2.722.494-4.152 0-1.795.573-3.457 1.547-4.811m6.706 4.81a25.765 25.765 0 0 1-2.048 10.09M7.677 14c.135-.98.205-1.98.205-2.997a4.126 4.126 0 0 1 8.253 0c0 .502-.012 1.001-.037 1.497"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke="#868F97"
					></path>
				</svg>
				Login
			</button>
		</div>
	);
};

export default LoginButton;