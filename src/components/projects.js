import "./projects.css";
import ProjectTile from "./project-tile";
import moviedb from "../images/moviedb screenshot.PNG";
import rps from "../images/rps.JPG";
import beer from "../images/beer.JPG";

const dataarray = [
    {
        image: moviedb,
        title: "Movie Database with React",
        description: "Searchable and filterable movie database using the MovieDB API",
        techstack: "React, Javascript, API, CSS", 
        livesite: "https://comforting-bombolone-f53d32.netlify.app/",
        githubrepo: "https://github.com/KathrynDavies123/mov"
    },

    {
        image: rps,
        title: "Rock Paper Scissors game",
        description: "Rock Paper Scissors against the computer",
        techstack: "HTML, CSS, Javascript", 
        livesite: "https://kathryndavies123.github.io/RockPaperScissorsv2/",
        githubrepo: "https://github.com/KathrynDavies123/RockPaperScissorsv2"
    },

    {
        image: beer,
        title: "Beer Database using Beer API",
        description: "Beer database with details page of each beer and an option to select a random beer",
        techstack: "React, Javascript, API, CSS", 
        livesite: "https://illustrious-panda-46531a.netlify.app/",
        githubrepo: "https://github.com/KathrynDavies123/react-beer-api"
    }
]

const Projects = () => {
    return ( <section>
        <h2>Projects</h2>
        <p>Things I've built so far</p>
        <div className="projects-grid">
            {dataarray.map((item, index) => (
                <ProjectTile key={"ProjectTile" + index} image={item.image} title={item.title} description={item.description} techstack={item.techstack} livesite={item.livesite} githubrepo={item.githubrepo} />
            ))}
        </div>
    </section> );
}
 
export default Projects;