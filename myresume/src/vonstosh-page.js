import './component/iframe-view.js';

import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class Page  extends LitElement{
  static get styles() {
    return css`



    `;
  }
    render(){
      return html`
        <iframe-view framesrc="https://shapemotion.com/german/spmpro22/">

        </iframe-view>
      `;
    }

  }

  customElements.define('vonstosh-page', Page);
