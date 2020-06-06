import {
  LitElement,
  html,
  css,
  customElement,
  property
} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';

class GalleryView extends LitElement {
  static get properties() {
   return { name: { type: String } };
 }

 constructor() {


    super();
    this.name;
  }

    static get styles() {
      return css`

      .gallery {
        display: grid;
        grid-template-columns: repeat(4,auto);
        grid-auto-rows: 400px  550px 550px;
        grid-auto-flow: dense;
    }
	.spacer{
		grid-column:span 2;
	}
	
    div {
    display: block;
}
.gallery > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (min-width: 320px) {
	 .gallery {
        display: grid;
        grid-template-columns: repeat(1,auto);
		grid-auto-rows:100vh;
		
    }
	
	.spacer{
		grid-column:span 1;
	}	
	.lastone{
			grid-column:span 1;
		}
		
}

/* Larger than desktop */
@media (min-width: 1001px) {
	
	.gallery {
        display: grid;
        grid-template-columns: repeat(3,auto);
        grid-auto-rows: 400px  400px 400px;

		
    }
		.spacer{
		grid-column:span 1;
	}	
	.lastone{
			grid-column:span 2;
		}	
		
	
}

/* Larger than Desktop HD */
@media (min-width: 1201px) {
	
			  .gallery {
        display: grid;
        grid-template-columns: repeat(4,auto);
        grid-auto-rows: 400px  550px 550px;
       grid-auto-flow: dense;
    }
	.spacer{
		grid-column:span 2;
	}	
	.lastone{
			grid-column:span 2;
		}	

}




      `;
    }
  render() {
    return html `
    <div class="gallery">
    <div> <img src="images/gallery/${this.name}/1.jpg"></div>
    <div> <img src="images/gallery/${this.name}/2.jpg"></div>
    <div class="spacer" > <img src="images/gallery/${this.name}/3.jpg"></div>
    <div > <img src="images/gallery/${this.name}/4.jpg"></div>
    <div  class="spacer"  > <img src="images/gallery/${this.name}/5.jpg"></div>
    <div ><img src="images/gallery/${this.name}/6.jpg"></div>
    <div  class="spacer" ><img src="images/gallery/${this.name}/7.jpg"></div>
    <div  class="lastone" ><img src="images/gallery/${this.name}/8.jpg"></div>
	
    </div>


      `;
  }

}

customElements.define('gallery-view', GalleryView);
