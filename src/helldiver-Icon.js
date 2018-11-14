/*
your most simple element is one that just has an image and information about itself
make it so you can make it different based on what you feed in via a *constructor*
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HelldiverIcon extends PolymerElement
{
    static get template() {
        return html`
            <style>
                div{
                    height: 50px;
                    width: 50px;
                }
            </style>
            <div title="[[description]]" style="background-image: url([[image]])";>
            </div>        
            [[name]]
        `;
      }
      
      constructor(){
        super();
        this.name = "default"
        this.image = "images/races/bugs_header.png"
        this.description = "not set"
      }

      static get properties() {
        return {
            name: String,
            image: String,
            description: String
        };
      }
}

window.customElements.define('helldiver-icon', HelldiverIcon);

