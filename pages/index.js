import React from "react";
import Header from "../components/Header";
import Title from "../components/Title/Title";

const index = () => {
  return (
    <div>
      <Header />
      <Title />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #1b1717;
          color: #eeebdd;
          margin-top: 90px;
        }
        a {
          text-decoration: none;
          color: #eeebdd;
        }
      `}</style>
    </div>
  );
};

export default index;
