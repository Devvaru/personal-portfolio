import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
    return (
        <main className={"nav-container h-fit bg-white p-4 flex justify-between"}>
            <div className={"nav flex gap-2 text-xl"}>
                <a href={"#projects"} className={"nav-link"}>Projects</a>
                <a href={"#stacks"} className={"nav-link"}>Stacks</a>
                <a href={""} className={"nav-link"}>Design</a>
                <a href={"#contact"} className={"nav-link"}>Contact</a>
            </div>
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/devon-g-b627872a1/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className={"fa-brands"} />
                </a>
                <a href="https://github.com/Devvaru">
                    <FontAwesomeIcon icon={faGithub} size="2x" className={"fa-brands"} />
                </a>
            </div>
        </main>
    );
}