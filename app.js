import '/myresume/src/home-page.js';
import '/myresume/src/about-page.js';
import '/myresume/src/cota-page.js';
import '/myresume/src/blueplanet-page.js';
import '/myresume/src/northshore-page.js';
import '/myresume/src/amc-page.js';
import '/myresume/src/favorit-page.js';
import '/myresume/src/tdvr-page.js';
import '/myresume/src/vonstosh-page.js';



import '/myresume/src/videoquiz-page.js';
import '/myresume/src/viewer-page.js';
import '/myresume/src/real-page.js';
import '/myresume/src/gem-page.js';
import '/myresume/src/interior-page.js';
import '/myresume/src/namohomes-page.js';
import '/myresume/src/parisvideo-page.js';
import '/myresume/src/aeroplane-page.js';
import '/myresume/src/qziko-page.js';

import '/myresume/src/gallery-page.js';
import '/myresume/src/cats-page.js';
import '/myresume/src/parispotion-page.js';
import '/myresume/src/lalaboom-page.js';
import '/myresume/src/cosmetics-page.js';
import '/myresume/src/golfjet-page.js';


import '/myresume/src/component/nav-view.js';
import '/myresume/src/component/iframe-view.js';
import '/myresume/src/component/gallery-view.js';
import '/myresume/src/component/video-view.js';



import {store} from '/myresume/store.js';
import {Router} from 'https://unpkg.com/@vaadin/router';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',   data:{title: 'Home'},  component: 'home-page'},
  {path: '/about',  component: 'about-page'},
  {path: '/cota', component: 'cota-page'},
  {path: '/blueplanet', component: 'blueplanet-page'},
  {path: '/northshore', component: 'northshore-page'},
  {path: '/amc', component: 'amc-page'},
  {path: '/favorit', component: 'favorit-page'},
  {path: '/3dvr', component: 'tdvr-page'},
  {path: '/von-stosh', component: 'vonstosh-page'},


  {path: '/gems', component: 'gem-page'},
  {path: '/real3d', component: 'real-page'},
  {path: '/viewer', component: 'viewer-page'},
  {path: '/videoquiz', component: 'videoquiz-page'},

  {path: '/cats', component: 'cats-page'},
  {path: '/gallery', component: 'gallery-page'   },
  {path: '/paris-potion', component: 'parispotion-page'  },
  {path: '/golfjet', component: 'golfjet-page'   },
  {path: '/lalaboom', component: 'lalaboom-page'   },
  {path: '/cosmetics', component: 'cosmetics-page'   },
  {path: '/namohomes', component: 'namohomes-page'},
  {path: '/pp-video', component: 'parisvideo-page'},
  {path: '/aeroplane', component: 'aeroplane-page'},
  {path: '/qziko', component: 'qziko-page'},
  {path: '(.*)', component: 'about-page'},
  {path: '/vr/1/',  component: 'iframe-view'},
]);

const recordUrlVisit = context => {
  const visitedPath = context.pathname;
  alert(visitedPath);
}
