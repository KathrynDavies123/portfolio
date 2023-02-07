import "./techstack.css";
import { Icon } from '@iconify/react';

const TechStack = () => {
    return ( <section>
        <h2>My Tech Stack</h2>
        <p>Technologies I'm working with</p>
        <div className="techstack-icon-grid">
        <Icon icon="vscode-icons:file-type-html" width="80" height="80" />
        <Icon icon="vscode-icons:file-type-css" width="80" height="80" />
        <Icon icon="logos:javascript" width="80" height="80" />
        <Icon icon="logos:react" width="80" height="80" />
        <Icon icon="skill-icons:bootstrap" width="80" height="80" />
        <Icon icon="skill-icons:wordpress" width="80" height="80" />
        <Icon icon="vscode-icons:file-type-sass" width="80" height="80" />
        <Icon icon="mdi:github" width="80" height="80" color="white"/>
        <Icon icon="logos:visual-studio-code" width="80" height="80" />
        </div>
    </section> );
}
 
export default TechStack;