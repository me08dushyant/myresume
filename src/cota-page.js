import './component/iframe-view.js';

import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class CotaPage  extends LitElement{
  static get styles() {
    return css`



    `;
  }
    render(){
      return html`
        <iframe-view framesrc="http://experiencethecircuit.com/">


        </iframe-view>
      `;
    }

  }

  customElements.define('cota-page', CotaPage);
