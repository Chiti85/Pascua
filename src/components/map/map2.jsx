import React, { Component } from "react";
import { Link, String } from "react-router-dom";
import "./map2.css";

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

const Map2 = () => {
  return (
    <>
      <img id="tittleMapX" src={Tittlemap}></img>
      <p id="subtitielX">"Visit the kitchen and discover the hot points"</p>
      <div>
        <img id="mapX" src={map}></img>

        <div className="opacidadPutaX">
          <img id="greenCornerX" src={green}></img>
          <img id="arrowFX" className="arrow" src={arrow2}></img>
          <p id="P3X" className="parrafisX">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
          </p>
        </div>

        <div className="opacidadPutaBlueX">
          <img id="bluePlatesX" src={blue}></img>
          <img id="arrowEX" src={arrow}></img>
          <p className="parrafisX" id="P2X">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
          </p>
        </div>

        <div className="opacidadPutaVioletX">
          <img id="violetCX" src={purpel}></img>
          <p className="parrafisX" id="P6X">
            Wisi forensibus mnesarchum in cum. Per id impetus abhorreant, his no
            magna definiebas, inani rationibus in quo. Ut vidisse dolores est,
            ut quis nominavi mel.
          </p>
          <img id="arrowAX" className="arrowX" src={arrow}></img>
        </div>

        <div className="opacidadPutaYellowX">
          <img id="yellowSfX" src={yellow}></img>
          <p className="parrafisX" id="P1X">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
          </p>
          <img id="arrowBX" className="arrowX" src={arrow}></img>
        </div>

        <div className="opacidadPutaPinkX">
          <img id="pinkclosetX" src={pink}></img>
          <p className="parrafisX" id="P5X">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
          </p>
          <img id="arrowCX" className="arrowX" src={arrow2}></img>
        </div>
        <div className="opacidadPutaOrangeX">
          <img id="orangeKitchen1X" src={orange1}></img>
          <img id="orangeKitchen2X" src={orange2}></img>
          <img id="arrowDX" className="arrowX" src={arrow2}></img>

          <p className="parrafisX" id="P4X">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
            facilisis nibh. Nullam eu nisl et ex dignissim scelerisque.
          </p>
        </div>
      </div>
      <Link to="/map">
        <div id="pixiB">
          <h4 id="maptext77">Hide</h4>
        </div>
      </Link>

      <div id="circabutonsX">
        <Link to="/rules">
          <div id="circleRules">
            <h4 id="rulestext">Rules</h4>
          </div>
        </Link>
        <Link to="/">
          <div id="circleMap">
            <h4 id="maptext1">Home</h4>
          </div>
        </Link>
        <Link to="/schedule">
          <div id="circlschedule">
            <h4 id="scheduletext">
              Time <br></br>Table
            </h4>
          </div>
        </Link>
        <Link to="/material">
          <div id="circleMaterial">
            <h4 id="materialtext">Weapon</h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Map2;
