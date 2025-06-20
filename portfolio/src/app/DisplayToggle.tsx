import React from "react";
import { DisplayToggleProps } from "./types";



export default function DisplayToggle(props: DisplayToggleProps) {
    const { activeDisplay, setActiveDisplay } = props;

    return (
        <div className="flex justify-center">
            <button onClick={() => setActiveDisplay('projects')} className={`hover:cursor-pointer transition-colors duration-300 font-bold text-lg py-2 px-6 rounded-l-full ${activeDisplay === 'projects' ? 'bg-cyan-950 text-white' : 'bg-white text-cyan-950'
                }`}>
                <h2>Projects</h2>
            </button>
            <button onClick={() => setActiveDisplay('designs')} className={`hover:cursor-pointer transition-colors duration-300 font-bold text-lg py-2 px-6 rounded-r-full ${activeDisplay === 'designs' ? 'bg-cyan-950 text-white' : 'bg-white text-cyan-950'
                }`}>
                <h2>Designs</h2>
            </button>
        </div>
    )
}