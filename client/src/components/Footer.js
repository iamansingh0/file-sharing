import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <p className="footer-title">FileShare App</p>
        <p>
          Simply upload a file, share the link, and after it is downloaded, the
          file is completely deleted. Our server log files contain no personal
          identifying information.
        </p>
        <div className="footer-icons">
          <a
            href="https://twitter.com/dank_aman"
            rel="noreferer"
            target="_blank"
          >
            <BsTwitter className="icon" />
          </a>
          <a
            href="https://github.com/iamansingh0"
            rel="noreferer"
            target="_blank"
          >
            <BsGithub className="icon" />
          </a>
          <a
            href="https://instagram.com/iaman._1"
            rel="noreferer"
            target="_blank"
          >
            <AiFillInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/"
            rel="noreferer"
            target="_blank"
          >
            <ImLinkedin className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
