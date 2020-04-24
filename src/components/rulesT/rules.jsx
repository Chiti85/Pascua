import React from "react";
import { Link } from "react-router-dom";
import "./rules.css";

import TittleR from "./tittleRules.png";
import GigantRBR from "./cuerpoRB.png";
import Hand from "./manoRB.png";

const RuleT = () => {
  return (
    <>
      <img id="GigantR" src={GigantRBR}></img>
      <img id="handMove" src={Hand}></img>
      <div id="relocated1">
        <img id="tittleR" src={TittleR}></img>
        <h1 className="Intro">
          Hello everyone!! <br></br> These are the essential rules of this
          Easter morning please be serious and follow the instruction for a good
          time to everyone.
        </h1>
        <p className="N" id="N1">
          1
        </p>
        <p className="rulesTipo">No bite if it's not chocolate.</p>
        <div className="backgrounC" id="backgrounC1"></div>
        <p className="N" id="N2">
          2
        </p>
        <p className="rulesTipo">
          You need to drink at least 3 glass of wine or half a litter of beer to
          start the hunt.
        </p>
        <div className="backgrounC" id="backgrounC2"></div>
        <p className="N" id="N3">
          3
        </p>
        <p className="rulesTipo">Only one bag for person.</p>
        <div className="backgrounC" id="backgrounC3"></div>
        <p className="N" id="N4">
          4
        </p>
        <p className="rulesTipo">
          If you find your you have to come back to drink and cheers the others.
        </p>
        <div className="backgrounC" id="backgrounC4"></div>
        <p className="N" id="N5">
          5
        </p>
        <p className="rulesTipo">Drugs are allowed in this contest.</p>
        <div className="backgrounC" id="backgrounC5"></div>
        <p className="N" id="N6">
          6
        </p>
        <p className="rulesTipo">Have fun and no drama.</p>
        <div className="backgrounC" id="backgrounC6"></div>
        <p id="estrexa">*</p>

        <Link to="/">
          <div className="egg" id="circleHome">
            <h4 id="hometext">Home</h4>
          </div>
        </Link>
        <Link to="/map">
          <div className="egg" id="circleMap2">
            <h4 id="maptext2">Map</h4>
          </div>
        </Link>
        <Link to="/schedule">
          <div className="egg" id="circlschedule2">
            <h4 id="scheduletext2">
              Time <br></br>Table
            </h4>
          </div>
        </Link>
        <Link to="/material">
          <div className="egg" id="circleMaterial2">
            <h4 id="materialtext2">Weapon</h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RuleT;
