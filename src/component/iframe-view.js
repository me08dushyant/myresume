import {
  LitElement,
  html,
  css,
  customElement,
  property
} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';




class IframeView extends LitElement {
  static get properties() { return {
    framesrc: { type: String }
  };
}
constructor() {
   super();
   this.framesrc = 'http://experiencethecircuit.com';
   
 }

  static get styles() {
    return css`

      iframe{padding:0px; margin:0px; overflow:hidden;}

.holder{
  
  width:100%;
  
  
}



/* Larger than phablet (also point when grid becomes active) */
@media (min-width: 320px) {
	.holder{
  overflow:hidden;
  width:100%;
  height:100vh;
  
 
  
}
	
	
}



/* Larger than desktop */
@media (min-width: 1001px) {
	.holder{
  overflow:hidden;
  width:100%;
  height: 100vh;
  
}
}

/* Larger than Desktop HD */
@media (min-width: 1201px) {
	
	.holder{
  overflow:hidden;
  width:100%;
  height:100vh;
  
}
}


    `;
  }

  render() {
    return html `
    <div class="holder">

    <iframe src="${this.framesrc}" width="100%" height="100%" style="border:none;"
scrolling="no"  ></iframe>
</div>




      `;
  }





}

customElements.define('iframe-view', IframeView);
