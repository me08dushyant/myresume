import './component/gallery-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class AboutPage  extends LitElement{
    render(){
      return html`
            <gallery-View name="vahdam"></gallery-View>
      `;
    }

  }

  customElements.define('vahdam-page', AboutPage);
