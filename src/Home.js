import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import {Link} from 'react-router-dom'
export default function Home() {
    return (
      <section className="resume-section" id="home">
        <div className="resume-section-content">
        <h1 className='home'>Hello_________________I'm</h1>
          <h1 className="mb-0 home typed-out">
            Niharika Kasthuri <span className="text-primary home ">Manyam</span>
          </h1>
          <div className="subheading mb-5">Mern Stack Developer - Kakinada</div>
          
          <p className="lead mb-5">
            I am a MERN Stack Developer. I Will Create a Design and Development that can give value to your product.
          </p>
          <div className="social-icons">
            <Link
              className="social-icon"
              target="_blank"
              to="https://www.linkedin.com/in/niharika-kasthuri-2b6a97284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXO2EqlIlR7uqvvM41NrH9Q%3D%3D"
            >
              <FaLinkedin />
            </Link>
            <Link target="_blank" className="social-icon" to="https://github.com/Niharikakasthuri">
              <FaSquareGithub  />
            </Link>
          </div>
        </div>
      </section>
    );
  }