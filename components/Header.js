import React from "react";
import Link from "next/link";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";

const header = (props) => {
  return (
    <div className="header">
      <button className="headerButton">
        <Link href="/attacks">
          <a>Attacks</a>
        </Link>
      </button>
      <button className="headerButton">
        <Link href="/weaknesses">
          <a>Weakneses</a>
        </Link>
      </button>
      <style jsx>{`
        .header {
          overflow: hidden;
          text-align: center;
          padding: 10px;
          background-color: #630000;
          position: fixed; /* Set the navbar to fixed position */
          top: 0; /* Position the navbar at the top of the page */
          width: 100%; /* Full width */
        }

        .headerButton {
          background-color: #1b1717;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin-right: 20px;
          cursor: pointer;
        }

        .headerButton:hover {
          background-color: #312d2d;
        }
      `}</style>
    </div>
  );
};

export default header;
