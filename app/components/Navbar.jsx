"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="nav-wrapper">
            <Link href="/" className="nav-logo">
                2ndhand
            </Link>
            <nav>
                <Link href="/" className={pathname === "/" ? " active top-nav" : "top-nav"}>
                    <svg
                        fill="none"
                        strokeWidth={2}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height={22}
                        width={22}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span>Home</span>
                </Link>
                <Link href="/stores" className={pathname === "/stores" ? "active top-nav" : "top-nav"}>
                    <svg
                        fill="none"
                        strokeWidth={2}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height={22}
                        width={22}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    <span>My Stores</span>
                </Link>
                <Link href="/discover" className={pathname === "/discover" ? "active top-nav" : "top-nav"}>
                    <svg
                        fill="none"
                        strokeWidth={2}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        height={22}
                        width={22}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                        />
                    </svg>
                    <span>Discover</span>
                </Link>
            </nav>
        </div>
    );
}
