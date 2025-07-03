import { ProjectsModalProps } from "./types";
import { useState } from 'react';

export default function ProjectsModal({ modalOpen, setModalOpen, projectImgs }: ProjectsModalProps) {

    if (!modalOpen) return null;

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImgs = projectImgs.length;

    return (
        <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center bg-black/50"
            onClick={() => setModalOpen(false)}
        >

            <div className="relative w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6" onClick={(e) => e.stopPropagation()} >

                <button onClick={() => { setModalOpen(false) }} className="absolute top-3 right-3 text-gray-500 hover:text-cyan-950 text-xl font-bold hover:cursor-pointer"><p className="text-3xl">{`×`}</p></button>

                <div className="flex gap-4 items-center">

                    <button
                        onClick={() => setCurrentIndex((prev) => (prev === 0 ? totalImgs - 1 : prev - 1))}
                        aria-label="Previous image"
                        disabled={totalImgs <= 1}
                        className="hover:cursor-pointer"
                    >
                        <p className="text-3xl text-cyan-950">◀</p>
                    </button>

                    <img src={projectImgs[currentIndex]} alt={`Project image ${currentIndex + 1} of ${totalImgs}`} className="object-contain w-full h-auto max-h-[80vh] transition duration-300" />

                    <button
                        onClick={() => setCurrentIndex((prev) => (prev === totalImgs - 1 ? 0 : prev + 1))}
                        aria-label="Next image"
                        disabled={totalImgs <= 1}
                        className="hover:cursor-pointer"
                    >
                        <p className="text-3xl">▶</p>
                    </button>
                </div>
            </div>
        </div>
    );
}