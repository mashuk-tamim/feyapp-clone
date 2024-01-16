import React from 'react';

const TrailButton = () => {
    return (
		<div>
			<button className="select-none border border-[#45494b] rounded-full px-3 py-1 text-[10px] text-white font flex gap-2 items-center bg-[#121212]">
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="border rounded-full border-gray"
				>
					<path
						stroke="#868F97"
						stroke-width="1.5"
						d="M13.5 12.8053C14.2525 12.3146 14.75 11.4654 14.75 10.5C14.75 8.98122 13.5188 7.75 12 7.75C10.4812 7.75 9.25 8.98122 9.25 10.5C9.25 11.4654 9.74745 12.3146 10.5 12.8053L10.5 14.75C10.5 15.5784 11.1716 16.25 12 16.25C12.8284 16.25 13.5 15.5784 13.5 14.75L13.5 12.8053Z"
					></path>
				</svg>
				Start your trail
			</button>
		</div>
	);
};

export default TrailButton;