import React, { Component } from "react";
import { Link, String } from "react-router-dom";
import "./home.css";

import elcuerpo from "./cuerpo.png";
import hometittle from "./tittle.svg";
import comic from "./comic.svg";
import baseFuego from "./negrofuego.png";
import naranjaFuego from "./naranjafuego.png";
import redFuego from "./rojofuego.png";
import caraFuego from "./carafuego.png";

class home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <img className="tittle" src={hometittle}></img>
        <img className="gigantR" src={elcuerpo}></img>
        <img id="comic" src={comic}></img>

        <div id="fuego1">
          <img className="fuego1B" src={baseFuego}></img>
          <img className="fuego1R" src={redFuego}></img>
          <img className="fuego1O" src={naranjaFuego}></img>
          <img className="fuego1F " src={caraFuego}></img>
        </div>

        <div id="fuego2">
          <img className="fuego2B" src={baseFuego}></img>
          <img className="fuego2R" src={redFuego}></img>
          <img className="fuego2O" src={naranjaFuego}></img>
          <img className="fuego2F " src={caraFuego}></img>
        </div>

        <div id="fuego3">
          <img className="fuego3B" src={baseFuego}></img>
          <img className="fuego3R" src={redFuego}></img>
          <img className="fuego3O" src={naranjaFuego}></img>
          <img className="fuego3F " src={caraFuego}></img>
        </div>

        <div id="fuego4">
          <img className="fuego4B" src={baseFuego}></img>
          <img className="fuego4R" src={redFuego}></img>
          <img className="fuego4O" src={naranjaFuego}></img>
          <img className="fuego4F " src={caraFuego}></img>
        </div>

        <div id="fuego5">
          <img className="fuego5B" src={baseFuego}></img>
          <img className="fuego5R" src={redFuego}></img>
          <img className="fuego5O" src={naranjaFuego}></img>
          <img className="fuego5F " src={caraFuego}></img>
        </div>

        <div id="fuego6">
          <img className="fuego6B" src={baseFuego}></img>
          <img className="fuego6R" src={redFuego}></img>
          <img className="fuego6O" src={naranjaFuego}></img>
          <img className="fuego6F " src={caraFuego}></img>
        </div>

        <div id="fuego7">
          <img className="fuego7B" src={baseFuego}></img>
          <img className="fuego7R" src={redFuego}></img>
          <img className="fuego7O" src={naranjaFuego}></img>
          <img className="fuego7F " src={caraFuego}></img>
        </div>

        <div id="fuego8">
          <img className="fuego8B" src={baseFuego}></img>
          <img className="fuego8R" src={redFuego}></img>
          <img className="fuego8O" src={naranjaFuego}></img>
          <img className="fuego8F " src={caraFuego}></img>
        </div>

        <div id="fuego9">
          <img className="fuego9B" src={baseFuego}></img>
          <img className="fuego9R" src={redFuego}></img>
          <img className="fuego9O" src={naranjaFuego}></img>
          <img className="fuego9F " src={caraFuego}></img>
        </div>

        <Link to="/rules">
          <div id="circleRules">
            <h4 id="rulestext">Rules</h4>
          </div>
        </Link>
        <Link to="/map">
          <div id="circleMap">
            <h4 id="maptext">Map</h4>
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
        {/* <div id="quoteS">
          <p id="quote">
            "Science investigates; religion interprets. Science gives man
            knowledge which is power; religion gives man wisdom which is
            control."
          </p>
          <p id="quoteL">Martin Luther King, Jr.</p>
        </div> */}
      </>
    );
  }
}

export default home;
