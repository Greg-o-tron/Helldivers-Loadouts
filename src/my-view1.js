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
    return html`  <div class="player">
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
