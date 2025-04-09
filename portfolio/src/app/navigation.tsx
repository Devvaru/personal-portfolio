import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
    return (
        <main className={"nav-container h-fit bg-white px-20 py-4 flex justify-between"}>
            <div className={"nav flex gap-3 text-xl"}>
                <a href={"#projects"} className={"nav-link hover:underline decoration-2 duration-300 text-cyan-950 font-semibold"}>Projects</a>
                <a href={"#stacks"} className={"nav-link hover:underline decoration-2 duration-300 text-cyan-950 font-semibold"}>Stacks</a>
                <a href={""} className={"nav-link hover:underline decoration-2 duration-300 text-cyan-950 font-semibold"}>Design</a>
                <a href={"#contact"} className={"nav-link hover:underline decoration-2 duration-300 text-cyan-950 font-semibold"}>Contact</a>
            </div>
            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/devon-g-b627872a1/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className={"fa-brands hover:scale-110 duration-300"} style={{color: "#006064",}} />
                </a>
                <a href="https://github.com/Devvaru" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} size="2x" className={"fa-brands hover:scale-110 duration-300"}  style={{color: "#006064",}} />
                </a>
            </div>
        </main>
    );
}