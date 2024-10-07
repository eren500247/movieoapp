import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date()
  console.log("Date :",date.getHours())
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
      </div>
      <p className="text-sm">{date.getFullYear()}Eren | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
