import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.img} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.description}</p>
      </div>
      <style jsx>{`
        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 400px;
          margin: 0 20px 50px 20px;
        }

        /* On mouse-over, add a deeper shadow */
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .card-image {
          width: 100%;
          max-height: 200px;
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default Card;
