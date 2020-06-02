import './component/iframe-view.js';

import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class CotaPage  extends LitElement{
  static get styles() {
    return css`



    `;
  }
    render(){
      return html`
        <iframe-view framesrc="https://online-media.s3.us-east-2.amazonaws.com/3dvrdesigns/3d-viewer/index.html">

        </iframe-view>
      `;
    }

  }

  customElements.define('viewer-page', CotaPage);
