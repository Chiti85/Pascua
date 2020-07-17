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

      <div className="opacidadPuta">
        <img id="greenCorner" src={green}></img>
        <img id="arrowF" className="arrow" src={arrow2}></img>
        <p id="P3" className="parrafis">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
        </p>
      </div>

      <div className="opacidadPutaBlue">
        <img id="bluePlates" src={blue}></img>
        <img id="arrowE" src={arrow}></img>
        <p className="parrafis" id="P2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
        </p>
      </div>

      <div className="opacidadPutaViolet">
        <img id="violetC" src={purpel}></img>
        <p className="parrafis" id="P6">
          Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no
          magna definiebas, inani rationibus in quo. Ut vidisse dolores est, ut
          quis nominavi mel.
        </p>
        <img id="arrowA" className="arrow" src={arrow}></img>
      </div>

      <div className="opacidadPutaYellow">
        <img id="yellowSf" src={yellow}></img>
        <p className="parrafis" id="P1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
        </p>
        <img id="arrowB" className="arrow" src={arrow}></img>
      </div>

      <div className="opacidadPutaPink">
        <img id="pinkcloset" src={pink}></img>
        <p className="parrafis" id="P5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
        </p>
        <img id="arrowC" className="arrow" src={arrow2}></img>
      </div>
      <div className="opacidadPutaOrange">
        <img id="orangeKitchen1" src={orange1}></img>
        <img id="orangeKitchen2" src={orange2}></img>
        <img id="arrowD" className="arrow" src={arrow2}></img>

        <p className="parrafis" id="P4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
        </p>
      </div>
      <div id="butonAll"></div>
    </>
  );
};

export default Map;
