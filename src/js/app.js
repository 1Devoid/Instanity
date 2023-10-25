import bootstrapInit from './libs/bootstrap.bundle.min.js';
import customSelect from './modules/custom-select.js';
import showPassword from './modules/show-password.js';
import getTime from './modules/get-time.js';
import timer from './modules/timer.js';
import showMenuMobile from './modules/show-menu-mobile.js';

bootstrapInit();
customSelect('#dropdown-1', '#menu-items-1');
customSelect('#dropdown-2', '#menu-items-2');
showPassword();
getTime();
timer();
showMenuMobile();
