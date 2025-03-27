import projects from "./projects-data";

export default function Projects() {
    return (
        <main className="projects-container">
            {Object.entries(projects).map(([key, project]) => (
                <div key={key} className="project-card">
                    <h3>{project.title}</h3>
                    {typeof project.url === "string" && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.url}
                        </a>
                    )}

                    <div className="project-images">
                        {Array.isArray(project.imgs) && project.imgs.map((img, index) => (
                            img && <img key={index} src={img} alt={`${project.title} screeenshot ${index + 1}`} style={{ width: 300 }} />
                        ))}
                    </div>

                    {Array.isArray(project.frameworks) && (
                        <ul className="frameworks-list">
                            {project.frameworks.map((framework, index) => (
                                <li key={index}>{framework}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </main>
    );
}