import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';



export class HomePage  extends LitElement{
  static get properties() {
   return { name: { type: String } };
 }

 constructor() {
    super();

    // var queryString = window.location.search;
    // var urlParams = new URLSearchParams(queryString);
    // var videosrc = urlParams.get('src');
    // this.name = videosrc;
    this.name = '';


  }

  static get styles() {
    return css`

      .holder{
        overflow:hidden;
        background:black;
        width:100%;
        height:100vh;

      }

    `;
  }
    render(){
      return html`
      <div class="holder">
    <video width="100%" height="100%" controls>
      <source src="${this.name}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </div>

      `;
    }

  }

  customElements.define('video-view', HomePage);
