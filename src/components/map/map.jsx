import React, { Component } from "react";
import "./map.css";

import map from "./map-map.png";
import Tittlemap from "./map-tittle.png";
import arrow from "./arrow.png";
import arrow2 from "./arrow2.png";
import green from "./greenCloset.png";
import blue from "./bluePlates.png";
import orange1 from "./orangeKitchenH.png";
import orange2 from "./orangeKitchenV.png";
import pink from "./pinkClosetKitchen.png";
import purpel from "./violetStand.png";
import yellow from "./yellowSofa.png";

const Map = () => {
  return (
    <>
      <img id="tittleMap" src={Tittlemap}></img>
      <img id="map" src={map}></img>
      <img id="greenCorner" src={green}></img>
      <img id="bluePlates" src={blue}></img>
      <img id="orangeKitchen1" src={orange1}></img>
      <img id="orangeKitchen2" src={orange2}></img>
      <img id="pinkcloset" src={pink}></img>
      <img id="violetC" src={purpel}></img>
      <img id="yellowSf" src={yellow}></img>
      <img id="arrowA" className="arrow" src={arrow}></img>
      <img id="arrowB" className="arrow" src={arrow}></img>
      <img id="arrowC" className="arrow" src={arrow2}></img>
      <img id="arrowD" className="arrow" src={arrow2}></img>
      <img id="arrowF" className="arrow" src={arrow2}></img>
      <img id="arrowE" src={arrow}></img>
      <div id="P1">
        <p className="parrafis">
          Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no
          magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut
          quis nominavi mel.
        </p>
      </div>
    </>
  );
};

export default Map;
