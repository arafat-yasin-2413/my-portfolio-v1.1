import React from "react";
import Logo from "./Logo";

function Navbar() {
    return (
        <nav className="h-18 fixed z-50 w-full">
            <div>
                {/* logo */}
                <Logo></Logo>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio similique ad, eligendi quo quas modi maxime nisi, laboriosam culpa totam necessitatibus minus corrupti laudantium soluta. Exercitationem corrupti quas est placeat quibusdam eos corporis illo nam nisi aliquid laborum dignissimos consequatur ipsam aut earum, harum quod blanditiis molestiae repellendus incidunt possimus!</p>
            </div>
        </nav>
    );
}

export default Navbar;
