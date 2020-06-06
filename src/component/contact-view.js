import {
  LitElement,
  html,
  css,
  customElement,
  property
} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


//import '/icons/iron-icons/iron-icons.js';

class ContactView extends LitElement {
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

    .grid{

      display:grid;
      height:100vh;
      width:100%;
      position:sticky;
      top:0px;
    }

.holder{

  overflow:hidden;
  min-width:550px;
  height:600px;
/*  background-color:gray; */
  color:white;
  margin:auto;
   justify-self:center;
     min-width:350px;
}

input, textarea {

    height: 40px;
    border: 1px solid #DFDFDF;
    display: block;
    padding-left: 10px;

    font-size: 15px;
    font-family: 'PT Serif', sans-serif;
    font-style: italic;
    outline: none;
      min-width:350px;
}

textarea {
  padding-top:10px;
  min-width:350px;
  height: 195px;
}

button{
  padding:15px;
  width:150px;
  font-size: 15px;
  font-weight:600;
}
button >span {
  padding-inline-end:10px;
}
}
    `;
  }

  render() {
    return html `
    <div class="grid">
    <div class="holder">
    <h1>Connect Me </h1>
    <form action=" https://formsubmit.co/me08dushyant@gmail.com " method="POST">

    <input type="text" name="name" placeholder="Your Name"><br/>
    <input type="email" name="email" placeholder="Your Email"><br/>
    <input type="text" name="tel" placeholder="Your Phone"><br/>
	<textarea placeholder="Your Message" class="form-control" name="message" rows="10" required=""></textarea><br/>
    <button type="submit"> <span>SEND</span> <iron-icon icon="icons:icons:send"></iron-icon> </button><br/>
	<input type="hidden" name="_captcha" value="false">
	<input type="hidden" name="_next" value="http://dkspro.in/">

</form>

    </div>
    </div>




      `;
  }





}

customElements.define('contact-view', ContactView);
