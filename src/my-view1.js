/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`  <style>
                        html {
                          min-height: 100%;
                        }
                        
                        body {
                          min-height: 100%;
                          background-image: url("../img/background-small.jpg");
                          background-position: bottom;
                          background-repeat: no-repeat;
                          background-color: black;
                          background-size: cover;
                        }
                        
                        @font-face {
                          font-family: "handelGothic";
                          src: url("../font/Handel_Gothic_D_Bold.ttf");
                        }
                        
                        img {
                          vertical-align: bottom;
                          display: block;
                        }
                        
                        .gothic {
                          font-family: handelGothic;
                          font-size: 1.15em;
                          margin: 0.5em;
                          text-shadow: 0.5px 1.5px 1px black;
                          color: lightgray;
                          cursor: default;
                          -webkit-touch-callout: none;
                          -webkit-user-select: none;
                          -khtml-user-select: none;
                          -moz-user-select: none;
                          -ms-user-select: none;
                          user-select: none;
                        }
                        
                        img.topicon {
                          width: 100%;
                          margin: 0.5em auto 0 auto;
                          display: block;
                        }
                        
                        .title {
                          display: block;
                          text-align: center;
                          font-size: 2em;
                          text-decoration: underline;
                          line-height: 30%;
                        }
                        
                        .subtitle {
                          display: block;
                          margin: 0 auto 0 auto;
                          text-align: center;
                          font-size: 1em;
                          color: darkgray;
                        }
                        
                        .label {
                          color: white;
                          line-height: 180%;
                          margin-left: 3%;
                          position: absolute;
                          top: 0;
                        }
                        
                        .site {
                          max-width: 25em;
                          min-width: 16em;
                          color: white;
                          margin: auto;
                        }
                        
                        p.legal {
                          font-size: 0.7em;
                          text-align: center;
                          text-shadow: 1px 1px 0px black;
                        }
                        
                        .player {
                          background: rgba(50, 50, 50, 0.8); /* For browsers that do not support gradients */
                          background: -webkit-linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.7));
                          background: -o-linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.7));
                          background: -moz-linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.7));
                          background: linear-gradient(rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.7));
                          border: 2px solid black;
                          box-sizing: border-box;
                        }
                        
                        .player > div{
                          background-color: rgba(80, 80, 80, 0.7);
                          width: 96%;
                          margin: 2%;
                          margin-left: auto;
                          margin-right: auto;
                          position: relative;
                          height: inherit;
                        }
                        
                        .itemPic {
                          width: 100%;
                          size: inherit;
                        }
                        
                        .itemWhide {
                          background-size: contain;
                          background-repeat: no-repeat;
                          background-position: center;
                          cursor: pointer;
                        }
                        
                        /*
                        .itemWhide:hover{
                          background-color: rgba(211, 228, 15, 0.7);
                        }
                        */
                        
                        .stratagems > div {
                          display: inline-block;
                          margin: 1%;
                          width: 23%;
                          background: url("../svg/shade.svg");
                          background-size: cover;
                          position: relative;
                          cursor: pointer;
                        }
                        
                        .stratagems img {
                          width: 100%;
                          top: 0;
                          box-sizing: border-box;
                        }
                        
                        img.shade {
                          position: relative;
                          border: 2px solid rgba(0,0,0,0.5);
                        }
                        
                        img.strat {
                          position: absolute;
                          padding: 3px;
                        }
                        
                        /*
                        .stratagems img:hover {
                          border: 3px solid rgba(211, 228, 15, 0.7);
                        }
                        .randomizer:hover{
                          background-color: rgba(211, 228, 15, 0.7);
                        }
                        */
                        
                        .button {
                          text-align: center;
                          position: relative;
                          font-size: 1.5em;
                          cursor: pointer;
                        }
                        
                        select.dicemode {
                          margin: 0.5em;
                          width: inherit;
                          border: none;
                          background: rgba(120, 120, 120, 1);
                          color: white;
                          font-size: 0.9em;
                          line-height: 200%;
                          text-shadow: none;
                          padding: 0.2em;
                          cursor: pointer;
                        }
                        
                        .dicemode option {
                          background: rgba(150, 150, 150, 1);
                        }
                        
                        .share {
                        }
                        
                        .share input {
                          width: inherit;
                          border: none;
                          margin: 0.5em;
                          background: rgba(120, 120, 120, 1);
                          color: white;
                          padding: 0.2em;
                        }
                        
                        ul.playerPicker {
                          list-style-type: none;
                          margin: 0;
                          padding: 0;
                          width: 100%;
                          display: none;
                        }
                        
                        .playerIcon {
                          background: url("../svg/Player.svg");
                          background-repeat: no-repeat;
                          background-size: 400% 200%;
                          width: 25%;
                          position: relative;
                          display: inline-block;
                          box-sizing: border-box;
                        }
                        
                        .playerIcon:hover {
                          background-position-y: 100%;
                        }
                        
                        .player2 {
                          background-position-x: 33.33%;
                        }
                        
                        .player3 {
                          background-position-x: 66.66%;
                        }
                        
                        .player4 {
                          background-position-x: 100%;
                        }
                        
                        .playerIcon img {
                          opacity: 0;
                          width: 100%;
                          display: block;
                        }
                        
                        .test-console {
                          position: fixed;
                          top: 10px;
                          left: 10px;
                          width: 20%;
                          bottom: 10px;
                          background: white;
                          border: 1px solid black;
                          overflow-y: scroll;
                          font-family: monospace;
                        }
                        
                        @media only screen and (min-width: 1281px) {
                          body {
                            background-image: url("../img/background-medium.jpg");
                          }
                        }
                        @media only screen and (min-height: 721px) {
                          body {
                            background-image: url("../img/background-medium.jpg");
                          }
                        }
                        
                        @media only screen and (min-width: 1921px) {
                          body {
                            background-image: url("../img/background-big.jpg");
                          }
                        }
                        @media only screen and (min-height: 1081px) {
                          body {
                            background-image: url("../img/background-big.jpg");
                          }
                        }
                  </style>
                    <div class="player">
                    <img class="topicon" src="svgo/header.svg" alt="Liber-Coffee"/>
                    <p class="gothic title">  Liber-Coffee  </p>
                    <p class="gothic subtitle">Helldivers loadout randomizer</p>
                    <p class="gothic">PERKS</p>
                    <div class="itemWhide">
                      <img class="itemPic" ng-click="rollPerk()" ng-src="svgo/{{loadout.perk.img}}.svg"/>
                      <p class="gothic label" ng-bind-template="{{loadout.perk.name}}"></p>
                    </div>
                    <p class="gothic">PRIMARY WEAPON</p>
                    <div class="itemWhide">
                      <img class="itemPic" ng-click="rollPrimary()" ng-src="svgo/{{loadout.primary.img}}.svg"/>
                        <p class="gothic label" ng-bind-template="{{loadout.primary.name}}"></p>
                    </div>
                    <p class="gothic">STRATAGEMS</p>
                    <div class="stratagems">
                      <div ng-repeat="stratagem in loadout.stratagems">
                        <img class="shade"
                            ng-style="{'background-color':'rgb('+loadout.stratagems[$index].color+')'}"
                            src="svgo/shade.svg"/>
                        <img class="strat"
                            ng-click="rollStratagem($index)"
                            ng-src="svgo/{{loadout.stratagems[$index].img}}.svg"/>
                      </div>
                    </div>
                    <div class="randomizer"  ng-click="rollEverything()">
                        <p class="gothic label button">Save!</p>
                    </div>
                    <p class="gothic">Class</p>
                    <div>
                      <select class="dicemode gothic"
                              ng-model="dicemode"
                              ng-options="option.label for option in diceoptions track by option.id">

                      </select>
                    </div>
                    <p class="gothic">Share</p>
                    <div class="share">
                      <input ng-model="url" onclick="this.select();" ng-blur="calcHash()">
                    </div>
                  </div>
                    </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
