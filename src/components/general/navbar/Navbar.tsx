import React from "react";
import Logo from "./Logo";

function Navbar() {
    return (
        <nav className="h-18 fixed z-50 w-full">
            <div>
                {/* logo */}
                <Logo></Logo>
            </div>
        </nav>
    );
}

export default Navbar;
