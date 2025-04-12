import projects from "./projects-data";

export default function Projects() {
    return (
        <main className="projects-container flex flex-col items-center justify-center gap-12 py-8">
            {Object.entries(projects).map(([key, project]) => (

                // Project Card
                <div key={key} className="project-card w-full rounded-xl flex flex-col bg-white 2xl:flex-row 2xl:max-w-[66%]">

                    {/* images for modal*/}
                    {/* <div className="project-images">
                        {Array.isArray(project.imgs) && project.imgs.map((img, index) => (
                            img && <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} style={{ width: 300 }} />
                        ))}
                    </div> */}

                    <div className="project-image 2xl:h-auto 2xl:max-w-lg flex items-center justify-center p-4 2xl:p-0">
                        {project.imgs.length >= 1 && (
                            <img
                                src={project.imgs[0]}
                                alt={project.title + " Project Screenshot"}
                                className="rounded-t-xl 2xl:rounded-l-xl 2xl:rounded-r-none object-cover h-full w-full"
                            />
                        )}
                    </div>

                    <div className="flex flex-col p-8 gap-4">

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
                            <ul className="frameworks-list flex flex-wrap gap-2 text-cyan-800 font-bold"> {"|"}
                                {project.frameworks.map((framework, index) => (
                                    <li key={index}>{`${framework} | `}</li>
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