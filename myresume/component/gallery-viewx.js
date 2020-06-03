import {
  LitElement,
  html,
  css,
  customElement,
  property
} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';
import {autorun} from 'https://unpkg.com/mobx?module';
import {store} from '/store.js';
import { MobxLitElement } from 'https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module';


/*
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var gallerysrc = urlParams.get('src');
*/


class GalleryView extends MobxLitElement {



  static get properties() {
   return { name: { type: String } };
 }

 constructor() {


    super();
    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const videosrc = urlParams.get('src');

    // store.src= videosrc;
    // this.name = store.src;

  // if(store.starter==0){
  //   this.name = videosrc;
  // }
  // else {
   this.name = store.src ;

  // }


  }




    static get styles() {
      return css`

      .gallery {
        display: grid;
        grid-template-columns: repeat(4,auto);
        grid-auto-rows: 450px   500px auto;
        grid-auto-flow: dense;
    }
    div {
    display: block;
}
.gallery > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

      `;
    }
  render() {
    return html `
    <div class="gallery">
      <div> <img src="images/gallery/${store.src}/1.jpg"></div>
      <div> <img src="images/gallery/${this.name}/2.jpg"></div>
      <div style="grid-column:span 2;" > <img src="images/gallery/${this.name}/3.jpg"></div>
      <div > <img src="images/gallery/${this.name}/4.jpg"></div>
      <div style="grid-column:span 2;" > <img src="images/gallery/${this.name}/5.jpg"></div>
      <div ><img src="images/gallery/${this.name}/6.jpg"></div>
      <div style="grid-column:span 2;"><img src="images/gallery/${this.name}/7.jpg"></div>
      <div style="grid-column:span 2;"><img src="images/gallery/${this.name}/8.jpg"></div>

    </div>


      `;
  }



}

customElements.define('gallery-view', GalleryView);
