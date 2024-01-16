import React from 'react';

const ComponentTitle = ({title, text}) => {
    return (
		<div className="text-center space-y-4 md:space-y-6 lg:space-y-10">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="w-full md:w-4/5 lg:w-[65%] mx-auto text-gray text-sm">
				{text}
			</p>
		</div>
	);
};

export default ComponentTitle;