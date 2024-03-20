"use client";
import React, { useState } from "react";
import Hamburger from "@/public/images/shared/mobile/icon-hamburger.svg";
import Close from "/public/images/shared/mobile/icon-close.svg";
import Link from "next/link";

const Navbar = () => {
    const links = [
        {
            name: "OUR COMPANY",
            href: "/about"
        },
        {
            name: "LOCATIONS",
            href: "/location"
        },
        {
            name: "CONTACT",
            href: "/contact"
        }
    ];
    const [is_navbar_open, setIsNavbarOpen] = useState(false);

    return (
        <div className="sticky top-0 h-[96px] bg-white px-0 md:flex md:h-[155px] z-20 md:px-[39px] lg:px-[165px]">
            <div className="flex h-full items-center justify-between px-[24px] md:px-0">
                <Link href="/">
                    <img
                        src="/images/shared/desktop/logo-dark.png"
                        alt="Designo Logo"
                        className="h-[27px] w-[202px] min-w-[202px]"
                    />
                </Link>
                <button
                    className={"block md:hidden"}
                    onClick={() => setIsNavbarOpen(!is_navbar_open)}
                >
                    {is_navbar_open ? <Close /> : <Hamburger />}
                </button>
            </div>
            <nav
                className={`${is_navbar_open ? "flex" : "hidden"} w-full flex-col justify-center gap-[32px] bg-[#1D1C1E] px-[24px] py-[48px] md:flex md:flex-row md:items-center md:justify-end md:bg-inherit md:p-0`}
            >
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-[24px] leading-[25px] tracking-[2px] text-white md:text-[14px] md:text-black_1"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <div
                className={`${is_navbar_open ? "block" : "hidden"} h-screen w-full bg-black opacity-[50%] md:hidden`}
            ></div>
        </div>
    );
};

export default Navbar;