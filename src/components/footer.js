import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <footer>
        <p>Kathryn Davies</p>
      <ul>
        <li>
          <a
            href="https://github.com/KathrynDavies123"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={brands("github")} size="xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kathryn-davies-9285121ba/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={brands("linkedin")} size="xl" />
          </a>
        </li>
        <li>
          <a href="mailto:kathryn.davies1233@gmail.com">
            <FontAwesomeIcon icon={solid("envelope")} size="xl" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
