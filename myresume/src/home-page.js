//import '/component/resume-view.js';
import './component/contact-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class HomePage  extends LitElement{
  static get styles() {
    return css`
      .homegrid{display:grid; grid-template-columns:6fr 5fr}
      .portfolio{background-color:black;}

    `;
  }
    render(){
      return html`
	  <!--
      <div class="homegrid">
        <resume-view></resume-view> -->
        <div class="portfolio">
        <contact-view></contact-view>

HOME PAge Comes here 
        </div>
      </div>
      `;
    }

  }

  customElements.define('home-page', HomePage);
