import React from "react";
import HeaderText from "./UpperText";
import HeaderImage from "./HeaderImage";
import BottomText from "./BottomText";
import Demo from "./Demo";

const Header = () => {
	return (
		<section className="bg-blueLight w-screen">
			<div className="max-w-7xl mx-auto">
				<div>
					<HeaderText></HeaderText>
				</div>

                <div>
                    {/* <Demo></Demo> */}
					<HeaderImage></HeaderImage>
				</div>

				<div>
					<BottomText></BottomText>
				</div>
			</div>
		</section>
	);
};

export default Header;
