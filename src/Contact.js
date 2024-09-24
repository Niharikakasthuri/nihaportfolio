import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";


export default function Contact() {
    return (
      <div>
        <section className="resume-section" id="contact">
          <div className="resume-section-content">
            <h2 className="mb-5">Contact</h2>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
              <FaPhoneAlt className="icon" />
              </li>
              <li className="list-inline-item">
              <h2 className="contact-name mb-3 ml-3">9133974232</h2>
              </li>
              <br/>
              <li className="list-inline-item">
              <MdEmail className="icon" />
              </li>
              <li className="list-inline-item">
              <h2 className="contact-name mb-3 ml-3">kasthuriniharika32@gmail.com</h2>
              </li>
              <br/>
              <li className="list-inline-item">
              <AiOutlineLinkedin className="icon" />
              </li>
              <li className="list-inline-item">
              <h2 className="contact-name mb-3 ml-3">linkedin.com/in/niharika-kasthuri-2b6a97284</h2>
              </li>
            </ul>
            </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }