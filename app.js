import 'src/home-page.js';
import 'src/about-page.js';
import 'src/cota-page.js';
import 'src/blueplanet-page.js';
import 'src/northshore-page.js';
import 'src/amc-page.js';
import 'src/favorit-page.js';
import 'src/tdvr-page.js';
import 'src/vonstosh-page.js';



import 'src/videoquiz-page.js';
import 'src/viewer-page.js';
import 'src/real-page.js';
import 'src/gem-page.js';
import 'src/interior-page.js';
import 'src/namohomes-page.js';
import 'src/parisvideo-page.js';
import 'src/aeroplane-page.js';
import 'src/qziko-page.js';

import 'src/gallery-page.js';
import 'src/cats-page.js';
import 'src/parispotion-page.js';
import 'src/lalaboom-page.js';
import 'src/cosmetics-page.js';
import 'src/golfjet-page.js';


import 'src/component/nav-view.js';
import 'src/component/iframe-view.js';
import 'src/component/gallery-view.js';
import 'src/component/video-view.js';



import {store} from 'store.js';
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
