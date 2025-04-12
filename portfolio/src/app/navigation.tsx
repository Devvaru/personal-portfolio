'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={"nav-container h-fit bg-white px-10 md:px-20 py-4 flex justify-between"}>
            <button onClick={toggleMenu} className='md:hidden'>
                <div className="space-y-1">
                    <span className={`block h-0.5 w-6 bg-cyan-800 transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-cyan-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-cyan-800 transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>
            </button>

            <div className={`absolute top-16 left-0 w-full bg-white flex flex-col gap-4 px-10 py-10 md:static md:flex-row md:gap-6 md:p-0 md:w-auto md:items-center transition-all duration-300 z-10 ${isOpen ? "block" : "hidden"} md:flex`}>
                <a href={"#projects"} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold"}>Projects</a>
                <a href={"#stacks"} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold"}>Stacks</a>
                <a href={""} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold"}>Design</a>
                <a href={"#contact"} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold"}>Contact</a>
            </div>

            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/devon-g-b627872a1/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className={"fa-brands hover:scale-110 duration-300"} style={{ color: "#006064", }} />
                </a>
                <a href="https://github.com/Devvaru" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size="2x" className={"fa-brands hover:scale-110 duration-300"} style={{ color: "#006064", }} />
                </a>
            </div>
        </nav>
    );
}