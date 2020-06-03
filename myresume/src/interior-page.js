import './component/iframe-view.js';
import './component/gallery-view.js';
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';


export class CotaPage  extends LitElement{
  static get styles() {
    return css`



    `;
  }
    render(){
      return html`
      <gallery-view>
      <img slot="one" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTin5lTsQzYM-dklfQVQRPK5WdOQIY28XFnpdZ9x_T6gYs41Sgh">
      <img slot="two" src="http://idealpets.online/wp-content/uploads/2019/06/welcome.jpg">
      <img slot="three" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgjhhpYVWj18DEbcujMAnJ8XtJzXWSxeNIExBu9xSbSabr1m9N">
      <img slot="four" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJFoRH0eaK9NTjsrQ5xuWAgIDO8diYsUx8rMrPhfEgk3lWOxqC">
      <img slot="five" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNIbq3qK66Yyu2Pt5I061SUO0PlIQiArlxgWuQZWeetr-yk6Xj">
      <img slot="six" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhThDsKZ75RWurj2Mnl7819VJ_SdEiBuT2kIXsvCqf7zfnzcDR">
      <img slot="seven" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlPVKD3d6aa8cVKWXqtM1SJzHwQ4kZiFlRYu0brVpNTANR8Ybm">
      <img slot="eight" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVWmuWEMuxbWrPC_Defc6AzvKRnkeE_tlHGfIKQNYCv283Eon1">
      <img slot="nine" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ74t1h5QeLBsDNxGXuP9j_QOLjTA_PmyXSWGbNmYvhmUlvNqM3">
      </gallery-view>
      `;
    }

  }

  customElements.define('interior-page', CotaPage);
