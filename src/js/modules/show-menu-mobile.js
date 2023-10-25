function showMenuMobile() {
  const burger = document.querySelector('.header-mobile__burger'),
    menuClose = document.querySelector('#menuClose'),
    body = document.querySelector('.body'),
    menuMobile = document.querySelector('#menuMobile');

  if (burger) {
    burger.addEventListener('click', () => {
      menuMobile.classList.add('show');
      body.classList.add('no-scroll');
    });
    menuClose.addEventListener('click', () => {
      menuMobile.classList.remove('show');
      body.classList.remove('no-scroll');
    });
    menuClose.addEventListener('touchend', () => {
      menuMobile.classList.remove('show');
      body.classList.remove('no-scroll');
    });
  }
}

export default showMenuMobile;
