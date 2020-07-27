import React from "react";
import Header from "../Header";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects--container">
      <Header />
      <div className="gkp-projects--projects-container">
        <header className="row text-left gkp-projects--title">
          <h1 className="gkp-projects--title">Projects</h1>
        </header>
        <section className="row gkp-projects--body">
          <div className="col-md-12 text-justify gkp-projects--content-container">
            <ul>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="http://jobless2020.herokuapp.com/"
                  >
                    Jobless.com
                  </a>
                  : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde repellendus excepturi, molestias, maxime obcaecati, esse
                  nulla atque eveniet expedita fugit tempora vero! Repellendus
                  modi eos sapiente, soluta consectetur cumque repellat! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quae at
                  atque molestiae commodi beatae porro similique. Suscipit cum
                  animi temporibus expedita exercitationem dolorem enim eveniet,
                  accusamus laudantium necessitatibus perspiciatis aut.
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="https://fast-wildwood-12677.herokuapp.com/"
                  >
                    COVID-19 Patient Database (Mock)
                  </a>
                  : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde repellendus excepturi, molestias, maxime obcaecati, esse
                  nulla atque eveniet expedita fugit tempora vero! Repellendus
                  modi eos sapiente, soluta consectetur cumque repellat! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quae at
                  atque molestiae commodi beatae porro similique. Suscipit cum
                  animi temporibus expedita exercitationem dolorem enim eveniet,
                  accusamus laudantium necessitatibus perspiciatis aut.
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="https://githubfinder192837465.netlify.app/"
                  >
                    Github User Finder
                  </a>
                  : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Unde repellendus excepturi, molestias, maxime obcaecati, esse
                  nulla atque eveniet expedita fugit tempora vero! Repellendus
                  modi eos sapiente, soluta consectetur cumque repellat! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quae at
                  atque molestiae commodi beatae porro similique. Suscipit cum
                  animi temporibus expedita exercitationem dolorem enim eveniet,
                  accusamus laudantium necessitatibus perspiciatis aut.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
