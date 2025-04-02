import projects from "./projects-data";

export default function Projects() {
    return (
        <main className="projects-container flex flex-col items-center gap-8 px-12 py-8">
            {Object.entries(projects).map(([key, project]) => (
                <div key={key} className="project-card border rounded-xl p-8 flex gap-8">

                    {/* images for modal*/}
                    {/* <div className="project-images">
                        {Array.isArray(project.imgs) && project.imgs.map((img, index) => (
                            img && <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} style={{ width: 300 }} />
                        ))}
                    </div> */}

                    {/* image */}
                    <div className="project-image max-w-1/2">
                        <img src={project.imgs[0]} />
                    </div>

                    <div className="flex flex-col gap-4">

                        {/* title */}
                        {typeof project.url === "string" && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <h3 className="text-2xl text-cyan-950">{project.title}</h3>
                            </a>
                        )}

                        {typeof project.description === "string" && (
                            <p className="text-cyan-950">{project.description}</p>
                        )}

                        {/* stacks */}
                        {Array.isArray(project.frameworks) && (
                            <ul className="frameworks-list flex gap-2 text-cyan-800 font-bold"> {"|"}
                                {project.frameworks.map((framework, index) => (
                                    <li key={index}>{framework + " | "}</li>
                                ))}
                            </ul>
                        )}

                        {/* button */}
                        {typeof project.url === "string" && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="py-2 px-6 bg-cyan-600 hover:bg-cyan-800 text-white rounded-full w-40 flex justify-center font-semibold">
                                View Project
                            </a>
                        )}

                    </div>
                </div>
            ))}
        </main>
    );
}