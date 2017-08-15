import React from "react";
import { Link } from "react-router";

export const Header = (props) => {

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"}>Home</Link></li>                        
                        <li><Link to={"/company"}>Company</Link></li>                        
                        <li><Link to={"/signup"}>Sign Up</Link></li>
                        <li><Link to={"/signin"}>Sign In</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};