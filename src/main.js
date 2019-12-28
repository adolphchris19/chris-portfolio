// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/index.scss';
import Unicon from 'vue-unicons';
import { uniDribbble, uniLinkedin, uniBehance, uniTwitter, uniMediumM, uniGithub, uniAngleLeft, uniAngleRight } from 'vue-unicons/src/icons';
import DefaultLayout from '~/layouts/Default.vue';

Unicon.add([uniDribbble, uniLinkedin, uniBehance, uniTwitter, uniMediumM, uniGithub, uniAngleLeft, uniAngleRight]);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Unicon);
}
