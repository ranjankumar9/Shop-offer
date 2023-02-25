import React from "react";

const AutomotiveHover = () => {
  return (
    <div className="men-navbar">
      {/* column 1 */}
      <div className="column">
        <div className="section">
          <h2>CAR & VEHICLE ELECTRONICS</h2>

          <div className="item">Car GPS Navigation</div>
          <div className="item">Bluetooth Devices</div>
          <div className="item">Car Speakers & Tweeters</div>
          <div className="item">Car Stereos & Monitors</div>
        </div>
        <div className="section">
          <h2>CAR ACCESSORIES</h2>

          <div className="item">Car Body Covers</div>
          <div className="item">Car Mobile Chargers</div>
          <div className="item">Car Mobile Holders</div>
          <div className="item">Car Foot Mats</div>
        </div>
      </div>
      {/* column 2 */}

      <div className="column">
        <div className="section">
          <h2>BIKER GEAR & ACCESSORIES</h2>

          <div className="item">Biker Protective Gea</div>
          <div className="item">Bike Body Covers</div>
          <div className="item">brakes</div>
          <div className="item">Engine Oil</div>
        </div>
        <div className="section">
          <h2>PARTS & SPARES</h2>

          <div className="item">Filters</div>
          <div className="item">Lighting</div>
          <div className="item">External Parts</div>
        </div>
      </div>
      {/* column 3 */}

      <div className="coloumn">
        <img src="https://n1.sdlcdn.com/imgs/i/7/5/nipponleftnav-34888.jpg" />
      </div>
    </div>
  );
};

export default AutomotiveHover;
