import 'promise-polyfill/src/polyfill';
import './assets/scss/app.scss';
import userProfile from './js/profile';

window.onload = () => {
  userProfile();
};
