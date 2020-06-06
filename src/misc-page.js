import './component/gallery-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class Page  extends LitElement{
    render(){
      return html`
            <gallery-View name="misc"></gallery-View>
      `;
    }

  }

  customElements.define('misc-page', Page);
