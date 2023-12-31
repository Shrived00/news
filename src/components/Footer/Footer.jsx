import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{" "}
                <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
                    Piyush Agarwal
                </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="/" target="__blank">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="/" target="__blank">
                    <i className="fas fa-link fa-2x"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;