import React from "react";
import Card from "../Card/Card";

const Attack = () => {
  return (
    <div className="attacks-section">
      <Card
        img="https://media.tenor.com/images/0af393a439cb283329e119034e6dabdd/tenor.png"
        name="Slash and bite"
        description="Quick and powerful hit which can easily leave a mark even in the strongest dwarf, destroying shields and taking down those who couldn't resist the pointed rock fight."
      />
      <Card
        img="https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/2/2e/Dreadnought_Hiveguard_Fire_Mortar.png/revision/latest/scale-to-width-down/772?cb=20210226022338"
        name="Fire Mortar"
        description="Slow and long rage attack that melted and break the tougher land, it is as hot as planet's core, burning skin, shields and hair like paper. The worst nightmare of a pride beard."
      />
      <Card
        img="https://static.wikia.nocookie.net/deeprockgalactic_gamepedia_en/images/6/65/Glyphid_Dreadnought_Hiveguard_Rock_Burst_1.png/revision/latest/scale-to-width-down/473?cb=20210131040421"
        name="Rock Burst"
        description="Dust, rocks and ground are all combine to form the most painfull experience to any miner, with a loud scream and blow every sharp fragment is send to all directions. Simple as: avoid getting hit and tears would not be spilled."
      />
      <style jsx>{`
        .attacks-section {
          margin: 0 400px;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Attack;
