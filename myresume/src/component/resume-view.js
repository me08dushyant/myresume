import {LitElement, html, css, customElement, property} from 'https://unpkg.com/lit-element@2.3.1/lit-element.js?module';

//import './src/icons/iron-icons/iron-icons.js';


export class ResumeView  extends LitElement{

  static get styles() {
    return css`
    h1, h2, h3, p {margin:0px;}
    ul{padding-inline-start: 20px;}
    .resume{ padding:1.5em 2.5em 1.5em;  font-size: 110%;}
    .contact{

       display:inline-flex;
       grid-template-columns:auto auto auto;
       padding:0 0 1em 0;

     }
     .contact > span {padding-inline-end:20px; font-weight:500; font-size:90%;}
     .circle {
       display:inline-block;
       width:30px; height:30px;
       background-color:black;
       color:white;
       margin-inline-end:5px;
       padding:5px;
       border-radius: 25px;
     }
 span > iron-icon{  padding-left: 3px; padding-top:3px;}

     h4{margin-block-start:0px; margin-block-end:.5em;}
     .title > h2 , h3, h4, {margin:0px; padding:0px;}
      .title > span{font-size:1em;}
      .title{

        padding:1em 0 1em 0;
        border-bottom: #ccc .1em solid;
        border-top: #ccc .1em solid;

      }
      .profile{
        padding:1.5em 0 1.5em 0;
        border-bottom: #ccc .1em solid;
      }
      .profile > h3{ margin:0px; padding-botton:1em; }
      .details{
        display:grid;
        grid-template-columns:3fr 8fr;

      }
      .left-side{
          border-right: #ccc .1em solid;
          padding:1.5em 2em 0em 0;
          margin:0em 1.5em 0em 0em;
      }
      .right-side{
          padding:1.5em 0 0em 0;
      }
      .sub-div{
       height:2px;
       width:30px;
       background-color:black;
       margin:.65em 0 .65em 0;
     }
     .sec{
         border-bottom: #ccc .1em solid;
         padding-bottom:1em;
         margin-bottom:1em;
     }
     .sec-last{

         padding-bottom:1em;
         margin-bottom:1em;
     }
     .work{
       display:grid;
       grid-template-columns: auto auto;
       grid-template-rows:20px auto;

     }
     .info{
       grid-column: 1/-1;
     }
     .info > ul > ul > li { padding-block-end:5px;}
     .work > p { grid-column: 1/-1; align-self:center; }
     .work > .year { justify-self:right; font-weight:700;}
     .brands{
       display:grid;
       grid-template-columns: repeat(auto-fill, minmax(150px, 1fr ));
       grid-template-rows:auto;
       grid-column:1/-1;
       border-top: #ccc .1em solid;
     }

 .persondetail{display:flex; flex-direction: row;}
 .persondetail > div{ padding-right:20px;}


     .brands img{width:120px; padding-top:5px;}
    `;
  }


    render(){
      return html`
      <div class="resume" id="resume">
          <!-- <div class="contact">
           <span> <span class="circle"><iron-icon icon="icons:perm-phone-msg"></iron-icon> </span> +91 9897916884</span>
             <span> <span class="circle"><iron-icon icon="icons:mail"></iron-icon> </span>  me08dushyant@gmail.com</span>
             <span> <span class="circle"><iron-icon icon="icons:language"></iron-icon> </span> www.dushyant</span>
           </div>
           <div class="title">
             <h2>DUSHYANT KUMAR SINGH</h2>
             <span>CG Generalist / Creative Programmer </span>
-->
           </div>
           <div class="profile">
             <p>My job is simple spreading happiness and smile among my clients, viewers and my team through my skills and work. Currently I am working as freelancer. <br> Having experience of varoius trade helps me to come out with better approch to  address project. </p>
           </div>
           <div class="details">
             <div class="left-side">
               <h3>SKILLS</h3>
               <div class="sub-div">  </div>
                 <div class="sec">
                   <h4>Languages</h4>
                   <ul>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>javascript</li>
                     <li>XML</li>
                     <li>C#</li>
                   </ul>
                 </div>
                 <div class="sec">
                   <h4>Creative Assets</h4>
                   <ul>
                     <li>Modelling</li>
                     <li>Lighting</li>
                     <li>Animation</li>
                     <li>Creatives</li>

                   </ul>
                 </div>
                 <div class="sec-last">
                   <h4>Tools I Use</h4>
                   <ul>
                     <li>Adode Suite</li>
                     <li>3dsMax</li>
                     <li>Corona</li>
                     <li>Unity</li>
                     <li>Krpano</li>
                     <li>Cordova</li>
                   </ul>
                 </div>
             </div>
             <div class="right-side">
               <h3>WORK EXPERIENCE</h3>
               <div class="sub-div">  </div>

               <div class="sec work">
                 <h4>Freelancer and Team lead</h4>
                 <div class="year">2016 -- Till Now</div>
                 <div class="info">
                 <ul>  <ul>
                   <li> Taking Clients project details & assist them with solution and keep them updated with project status.</li>
                   <li> Creating strategy & workflow for project and assign them to team mates. </li>
                   <li> Indentify critical points and chellanges in the projects and trying to impletent newer technologies. </li>

                 </ul> </ul>
                 </div>
               </div>

               <div class="sec work">
                 <h4>Senior 3D Artist</h4>
                 <div class="year">2010 -- 2016</div>
                 <div class="info">
                 <ul> <h4>ShapeMotion Pvt Ltd.</h4>  <ul>
                   <li> Creating Architectural Renderings </li>
                   <li> Implementing 360 presentation for realtors</li>
                   <li> Managing media production </li>

                 </ul> </ul>
                 </div>
               </div>

               <div class="sec work">
                 <h4>3D Instructor </h4>
                 <div class="year">2008 -- 2010</div>
                 <div class="info">
                 <ul> <h4>Picasso Animation College </h4>  <ul>
                   <li> Imparting skills of 3d design for Maya and Max </li>
                   <li> Helping students to create projects and presentation </li>
                   <li> Teaching basics for graphic design and web </li>

                 </ul> </ul>
                 </div>
               </div>

               <div class="sec work">
                 <h4>3D Instructor </h4>
                 <div class="year">2000 -- 2019</div>
                 <div class="info">
                 <ul> <h4>Pumpkin Animation</h4>  <ul>

                   <li> Imparting skills of 3d design for Maya</li>
                   <li> Helping students to create projects </li>
                   <li> Taking guest lectures on Web</li>
                 </ul> </ul>
                 </div>
               </div>
               <h3>EDUCATION </h3>
               <div class="sub-div">  </div>
               <div class="sec work ">
                 <h4>PROFESSIONAL</h4>
                 <div class="year">2005 -- 2007</div>
                 <p>Diploma in Animation – Arena Multimedia </p>
               </div>
     		  <div class="sec work ">
                 <h4>Qualification</h4>
                 <div class="year">2002 -- 2005</div>
                 <p>Bachor of Science</p>
               </div>

     		  <h3>Personal Detail </h3>
               <div class="sub-div">  </div>
     		<div class="sec-last persondetail ">
                 <div><h4> Date of Birth  </h4>20 Oct 1984  </div>
     			<div> <h4>Language  </h4>English, Hindi </div>
     			<div> <h4>Nationality  </h4>Indian </div>

              </div>
             </div>

             <div class="brands">
               <img src="/images/brands/nokia.png" alt="">
               <img src="/images/brands/amc.png" alt="">
               <img src="/images/brands/dell.png" alt="">
               <img src="/images/brands/bbc.png" alt="">
               <img src="/images/brands/sundance.png" alt="">
               <img src="/images/brands/f1.png" alt="">
               <img src="/images/brands/spark.png" alt="">
               <img src="/images/brands/dsk.png" alt="">
               <img src="/images/brands/vahdam.png" alt="">
               <img src="/images/brands/team.png" alt="">
               <img src="/images/brands/oryx.png" alt="">
               <img src="/images/brands/hff.png" alt="">
             </div>

           </div>



         </div>
      `;
    }

  }

  customElements.define('resume-view', ResumeView);
