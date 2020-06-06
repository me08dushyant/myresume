import './component/resume-view.js';
import './component/resume-view.js';
import './component/contact-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class HomePage  extends LitElement{
  static get styles() {
    return css`
      .homegrid{display:grid; grid-template-columns:6fr 5fr}
      .portfolio{background-color:black;}
	  


/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 320px) {
	.homegrid{display:grid; grid-template-columns:1fr;}
}

/* Larger than tablet */
@media (min-width: 750px) {
	.homegrid{display:grid; grid-template-columns:1fr;}
}

/* Larger than desktop */
@media (min-width: 1001px) {
	  .homegrid{display:grid; grid-template-columns:1fr;}
}

/* Larger than Desktop HD */
@media (min-width: 1201px) {
	 .homegrid{display:grid; grid-template-columns:6fr 5fr}
}

    `;
  }
    render(){
      return html`
      <div class="homegrid">
        <resume-view></resume-view>
        <div class="portfolio">
        <contact-view></contact-view>

        </div>
      </div>
      `;
    }

  }

  customElements.define('home-page', HomePage);
