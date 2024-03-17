"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Banner from "./HomePage/Banner";
import Command from "./HomePage/Command";
import Everything from "./HomePage/Everything";
import Expand from "./HomePage/Expand";
import RealTime from "./HomePage/RealTime";
import WholeNew from "./HomePage/WholeNew";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}, []);
	return (
        <main className="space-y-20">
            <Banner></Banner>
			<Command></Command>
			<Everything></Everything>
			<Expand></Expand>
			<RealTime></RealTime>
			<WholeNew></WholeNew>
		</main>
	);
}
