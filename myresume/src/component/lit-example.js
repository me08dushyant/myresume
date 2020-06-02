import {
  LitElement,
  html,
  css,
  customElement,
  property
} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';

class GalleryView extends LitElement {
  render() {
    return html `
    <div id="gallrey">
    Gallery Images comes here

    </div>
      `;
  }

}

customElements.define('gallery-view', GalleryView);
