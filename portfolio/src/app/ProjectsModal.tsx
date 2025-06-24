import { ProjectsModalProps } from "./types";

export default function ProjectsModal({ modalOpen, setModalOpen, projectImgs }: ProjectsModalProps) {

    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setModalOpen(false)}
        >

            <div className="relative w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6" onClick={(e) => e.stopPropagation()} >

                <button onClick={() => { setModalOpen(false) }} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold">x</button>

                <div className="flex flex-col gap-4 items-center">
                    {projectImgs.map((img, index) => (
                        <img key={index} src={img} alt={`Project ${index}`} className="w-full max-h-[70vh] object-contain rounded" />
                    ))}
                </div>
            </div>
        </div>
    );
}