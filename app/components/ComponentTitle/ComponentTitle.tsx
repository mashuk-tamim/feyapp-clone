import React from 'react';

const ComponentTitle = ({title, text}) => {
    return (
		<div className="text-center">
			<h1 className="text-3xl font-bold">{title}</h1>
			<p className="w-[65%] mx-auto text-gray text-sm">
				{text}
			</p>
		</div>
	);
};

export default ComponentTitle;