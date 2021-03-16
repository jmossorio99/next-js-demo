import React from "react";
import Card from "../Card/Card";

const Weaknesses = () => {
  return (
    <div className="weakness-section">
      <Card
        img="https://i2.wp.com/www.solojugadores.com/wp-content/uploads/2021/01/Deep-Rock-Galactic-Update-33-misiones-enemigos-biomas-2.jpg?ssl=1"
        name="Three antennae"
        description="Once all Hiveguard babies are killed, it open and show it's antennaes, hitting them dealts a great damage to it."
      />
      <Card
        img="https://media.tenor.com/images/0af393a439cb283329e119034e6dabdd/tenor.png"
        name="Main weak point"
        description="When all the antennaes are destroyed the Dreadnought open it's shell, every hit in that exposed zone will deal massive damage with maximun effect."
      />
      <Card
        img="https://i0.wp.com/impulsogeek.com/wp-content/uploads/2021/01/DRG33_17_Creatures.jpg?resize=1024%2C576&ssl=1"
        name="Hiveguard babies"
        description="The hiveguard, when we summon it's babies, will wait for it's creations to make the job, while that the main Dreadnoght is slow and will not attack with much frequency."
      />
      <style jsx>{`
        .weakness-section {
          margin: 0 400px;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Weaknesses;
