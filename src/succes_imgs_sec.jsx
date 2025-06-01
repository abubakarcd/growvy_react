import React from 'react';
import echonetLogo from '/echonet.png'; 
import circularELogo from '/easypay.png'; 
import hummingbirdLogo from '/sparrow.png';
import motiveLogo from '/motive.png'; 

function LogoDisplayWithImages() {
  return (
    <div className="flex items-center flex-wrap justify-around p-8">
      <img src={echonetLogo} alt="Echonet Logo" className="h-20" />
      <img src={circularELogo} alt="Circular e Logo" className="h-20" />
      <img src={hummingbirdLogo} alt="Hummingbird Logo" className="h-020" />
      <img src={motiveLogo} alt="Motive Logo" className="h-20" />
    </div>
  );
}

export default LogoDisplayWithImages;