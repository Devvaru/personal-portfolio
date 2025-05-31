'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ContentState } from "./types";
import Link from 'next/link';

export default function Navigation(props: ContentState) {
    const { activeDisplay, setActiveDisplay } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={"nav-container h-fit bg-white px-5 md:px-12 xl:px-30 py-4 flex justify-between"}>
            <button onClick={toggleMenu} className='md:hidden'>
                <div className="space-y-1">
                    <span className={`block h-0.5 w-6 bg-cyan-800 transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-cyan-800 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-cyan-800 transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                </div>
            </button>

            <div className={`absolute top-16 left-0 w-full bg-white flex flex-col gap-4 px-10 py-10 md:static md:flex-row md:gap-6 md:p-0 md:w-auto md:items-center transition-all duration-300 z-10 ${isOpen ? "block" : "hidden"} md:flex`}>
                <Link href={"#projects"} onClick={() => setActiveDisplay('projects')} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold text-lg"}>Projects</Link>

                <Link href={"#projects"} onClick={() => setActiveDisplay('designs')} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold text-lg"}>Designs</Link>

                <Link href={"#skills"} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold text-lg"}>Skills</Link>

                <a href={"mailto:devongaal@gmail.com"} className={"nav-link hover:underline decoration-2 text-cyan-950 font-semibold text-lg"}>Contact</a>
            </div>

            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/devon-g-b627872a1/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className={"fa-brands hover:scale-110 duration-300"} style={{ color: "#053345", }} />
                </a>
                <a href="https://github.com/Devvaru" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size="2x" className={"fa-brands hover:scale-110 duration-300"} style={{ color: "#053345", }} />
                </a>
            </div>
        </nav>
    );
}