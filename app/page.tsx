"use client";
import Header from "./HomePage/Header/page";
import Command from "./HomePage/Command/page";
import Everything from "./HomePage/Everything/page";
import Expand from "./HomePage/Expand/page";
import RealTime from "./HomePage/RealTime/page";
import WholeNew from "./HomePage/WholeNew/page";
import Demo from "./HomePage/Demo/page";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
	// useEffect(() => {
	// 	const lenis = new Lenis();

	// 	function raf(time: any) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}

	// 	requestAnimationFrame(raf);
	// }, []);
	return (
		<main className="space-y-20">
			<Header></Header>
			<Command></Command>
			<Everything></Everything>
			<Expand></Expand>
			<RealTime></RealTime>
			<WholeNew></WholeNew>
			<Demo></Demo>
		</main>
	);
}
