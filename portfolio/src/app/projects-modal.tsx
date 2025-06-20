import { ProjectsModalProps } from "./types";

export default function ProjectsModal({ modalOpen, setModalOpen, projectImgs }: ProjectsModalProps) {

    if (!modalOpen) return null;

    return (
        <div className="absolute transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button onClick={() => { setModalOpen(false) }}>x</button>
            <div className="project-images">
                {projectImgs.map((img, index) => (
                    <img key={index} src={img} alt={`Project ${index}`} />
                ))}
            </div>
        </div>
    );
}