import './component/iframe-view.js';

import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class BluePlanetPage  extends LitElement{
  static get styles() {
    return css`



    `;
  }
    render(){
      return html`
        <iframe-view framesrc="http://aboveinteractive.com/alucia/index.html">

        </iframe-view>
      `;
    }

  }

  customElements.define('blueplanet-page', BluePlanetPage);
