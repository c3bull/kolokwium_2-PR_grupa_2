import React from "react";
import {Link} from "react-router-dom";

const JCnavbar = () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                          role="tab"
                          aria-controls="pills-home" aria-selected="true">Posty</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                          role="tab"
                          aria-controls="pills-home" aria-selected="true">Strona główna</Link>
                </li>
            </ul>
        </div>
    );
};

export default JCnavbar;
