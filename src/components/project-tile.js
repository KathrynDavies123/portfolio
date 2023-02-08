import "./project-tile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const ProjectTile = (props) => {
    return ( <article>
        <img src={props.image} alt=""/>
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p className="tech-text">{props.techstack}</p>
            <div className="links"><a href={props.livesite} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={solid("link")} />  Live Preview</a>
            <a href={props.githubrepo} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={brands("github")} /> View Code</a>
            </div>
        </div>
    </article> );
}
 
export default ProjectTile;