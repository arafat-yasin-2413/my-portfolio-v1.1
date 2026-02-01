import Link from "next/link";
import React from "react";
import { LuCodeXml } from "react-icons/lu";

function Logo() {
    return (
        <Link href="/">
            <div className="bg-gray-200 w-10 h-10 rounded-full grid place-items-center">
                <LuCodeXml></LuCodeXml>
            </div>

            <p className="text-gray-200 font-bold md:text-2xl hidden sm:block">
                webdev
            </p>
        </Link>
    );
}

export default Logo;
