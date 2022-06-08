import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Index() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/", {
            state: {
                position: "center_v2",
            },
        });
    };
    return (
        <div className="intro__container">
            <span>Page 2</span>
            <section className="intro__body__container">
                <div className="intro__body">
                    <p>
                        Hi Sir/Ma'am,
                    </p>
                    <p>
                        I am Dikshant Rajput, a final year student of B.Tech. Computer Science And Engineering. I have more than a year of experience working as a web developer with different startups as an intern. Here are some of my projects:
                    </p>
                    <div className="projects__container">
                        <ul>
                            <li>
                            <a href="https://play.fanpower.team/" target="_dk"><strong>FanPower</strong></a><br></br>
                                - worked on initializing PWA, created back end, created smart contracts using solidity and front end implementation of contracts
                            </li>
                            <li>
                            <a href="https://lyrics2lit.com/" target="_dk"><strong>Lyrics 2 Literature</strong></a><br></br>
                                - worked on front end and created APIs for mobile application 
                            </li>
                            <li>
                            <a href="https://www.3edigisolutions.com/" target="_dk"><strong>3E Digital Solutions</strong></a><br></br>
                                - created using React.js
                            </li>
                            <li>
                            <a href="https://dikshantrajput.github.io/portfolio" target="_dk"><strong>Personal Portfolio</strong></a><br></br>
                                - created using React.js
                            </li>
                        </ul>
                    </div>
                    <p>
                        <a href="https://drive.google.com/file/d/1QW-84wOmmWAk73IlHa_rjnmr64GQNUQC/view?usp=sharing" className="resume__btn">
                            Resume
                        </a> 
                    </p>

                </div>
            </section>
            <button onClick={handleNavigate} className="back__link">
                &#8592; Back
            </button>
        </div>
    );
}

export default Index;
