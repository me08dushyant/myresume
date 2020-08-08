
import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';
import {autorun} from 'https://unpkg.com/mobx?module';
import {store} from '/store.js';
import { MobxLitElement } from 'https://unpkg.com/@adobe/lit-mobx@0.0.2/lit-mobx.js?module';
//import '@polymer/iron-icon/iron-icon.js';

 class NavView  extends MobxLitElement{
   constructor(){
     super();



   }
  static get styles() {
    return css`
    .holder{
      position:sticky;
      top:0px;
      padding-block-start:15px;
	  overflow: auto; 
      text-align:justify; 


    }
	.txt {position: relative;
    display: inline-block;
    position: relative;
    top: -6px;}
    a{color:white; font-size:15px; text-decoration:none;}
    a:hover{font-weight:700}

    h3{
        border-bottom: #555 .1em solid;
        color:white;

      }
    ul { list-style-type: none; margin-block-start: 0px; padding-inline-start: 1em;      }
    h4{ color:white; margin:0px; padding-block-start:20px; padding-block-end:5px;}

    br{}
    span{ display:block;}
	
    `;
  }
    render(){
      return html`
<div class="holder">

<ul>
<h4> <a href="/">  <mwc-icon>account_circle</mwc-icon>   &nbsp; <span class="txt">RESUME</span></a></h4>
<h4>360 VR </h4>
<li> <a href="/cota"> COTA </a> </li>
<li> <a href="/blueplanet">Blue Planet </a> </li>
<li> <a href="/northshore" >Northshore</a> </li>
<li> <a href="/amc" >AMC  </a> </li>
<li> <a href="/favorit">Favorit</a> </li>
<li> <a href="/3dvr">3D Virtual Tour</a> </li>
<li> <a href="/von-stosh">Von Stosh</a> </li>

<span></span>

<h4>Apps & Interactives</h4>

<li> <a href="/gems"  >Gems</a> </li>
<li> <a href="/videoquiz" >Video Quiz </a> </li>
<li> <a href="https://play.google.com/store/apps/details?id=com.aboveinteractive.safetybox&hl=en_IN" target="_blank" >Safty In A Box</a> </li>
<li> <a href="https://play.google.com/store/apps/details?id=com.AboveInteractive.Skybox&hl=en_IN"  target="_blank" >OptiPlex 25</a> </li>
<!-- <li> <a href="/real3d" >Real/3D</a> </li>
<li> <a href="/viewer" >3D Viewer</a> </li> -->

<span></span>
<!--
<h4> Arch Renderings </h4>
<li> <a  href="/cats"   >Interior cats </a> </li>
<li> <a  href="/paris-potion"  >Exterior paris </a> </li>
<li> <a  onclick="show(3)" >VR </a> </li>
<span></span>
-->
<h4> Products Renderings</h4>
<li> <a href="/paris-potion">Paris Potion</a> </li>
<li> <a href="/vahdam">Vahdam</a> </li>
<li> <a href="/golfjet">Golf Jet</a></li>
<li> <a href="/cosmetics">Cosmetis</a></li>
<li> <a href="/lalaboom">La La Boom</a> </li>
<li> <a href="/misc">Miscellaneous</a></li>
<span></span>

<h4> Videos </h4>
<li> <a  href="/namohomes">Namo Homes </a> </li>
<li> <a  href="/pp-video">Paris Potion </a> </li>
<li> <a  href="/aeroplane">Aeroplane</a> </li>
<li> <a  href="/qziko">Qziko</a> </li>


</ul>


</div>
      `;





    }
    viewOne(e){   store.src='cats';    }
    viewTwo(e){   store.src='paris-potion';   }

  }



  customElements.define('nav-view', NavView);
