import React from "react";
import Card from "react-bootstrap/Card";
import Advert from "../img/advertising.jpg";

const Advertising = () => {
  return (
    <Card className="text-white mb-5">
      <Card.Img src={Advert} alt="Card image" />
    </Card>
  );
};

export default Advertising;
