import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiCloudinary } from "react-icons/si";



export default function Skills() {
    return (
      <div>
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
              <BiLogoHtml5 />
              </li>
              <li className="list-inline-item">
              <BiLogoCss3 />
              </li>
              <li className="list-inline-item">
                <SiMysql />
              </li>
              <li className="list-inline-item">
                <BiLogoJavascript />
              </li>
              <li className="list-inline-item">
                <BiLogoPython />
              </li>
              <br/>
              <li className="list-inline-item">
                <BiLogoMongodb />
              </li>
              <li className="list-inline-item">
                <RiReactjsLine />
              </li>
              <li className="list-inline-item">
                <BiLogoNodejs />
              </li>
              <br/>
              <li className="list-inline-item">
                <BiLogoGithub />
              </li>
              <li className="list-inline-item">
                <VscVscode />
              </li>
              <li className="list-inline-item">
                <SiCloudinary />
              </li>
            </ul>
            </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }