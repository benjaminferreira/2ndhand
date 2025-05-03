"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="nav-wrapper">
            <Link href="/" className="nav-logo">
                2ndhand
            </Link>
            <nav>
                <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                </Link>
                <Link href="/stores" className={pathname === "/stores" ? "active" : ""}>
                    My Stores
                </Link>
                <Link href="/discover" className={pathname === "/discover" ? "active" : ""}>
                    Discover
                </Link>
            </nav>
        </div>
    );
}
