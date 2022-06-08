import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Index() {
    return (
        <footer>
            <p>
                <Link to="/page2" className="page2__link">
                    Go To Page 2 &#8594;
                </Link>
            </p>
            Made with <span>&hearts;</span> by Dikshant Rajput
        </footer>
    );
}

export default Index;
