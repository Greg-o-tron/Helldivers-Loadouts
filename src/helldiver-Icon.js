/*
your most simple element is one that just has an image and information about itself
make it so you can make it different based on what you feed in via a *constructor*
*/

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class Helldivericon extends PolymerElement
{
    static get template() {
        return html`
        <style> 
      
          div{
              background-image: url(${this.image});
          }
        </style>
        <div>
        </div>
        `;
      }
      
      static get properties() {
        return {
            name: String,
            image: String
        };
      }

}