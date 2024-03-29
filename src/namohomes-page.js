import './component/video-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class AboutPage  extends LitElement{
    render(){
      return html`
            <video-view name="https://online-media.s3.us-east-2.amazonaws.com/dk-resume/video/namo-homes.mp4"></video-view>
      `;
    }

  }

  customElements.define('namohomes-page', AboutPage);
