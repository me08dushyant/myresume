import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';

export class HomePage  extends LitElement{
    render(){
      return html`
      <h1> home Page View  </h1>
      `;
    }

  }

  customElements.define('home-page', HomePage);
