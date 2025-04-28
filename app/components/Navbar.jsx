import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./2ndhand-logo.png";

export default function Navbar() {
	return (
		<nav>
			<Image
				src={Logo}
				alt="2ndhand Logo"
				width={200}
				quality={100}
				placeholder="blur"
				style={{ borderRadius: "8px" }}
				aria-label="2ndhand logo"
			/>
			<Link href="/">Dashboard</Link>
			<Link href="/tickets">Tickets</Link>
		</nav>
	);
}
