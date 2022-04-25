'use strict';

const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');
const mobileFeatureArrowUp = document.querySelector(
  '.mobile__feature__up__arrow'
);
const mobileFeatureArrowDown = document.querySelector(
  '.mobile__feature__down__arrow'
);
const mobileCompanyArrowDown = document.querySelector(
  '.mobile__company__down__arrow'
);
const mobileCompanyArrowUp = document.querySelector(
  '.mobile__company__up__arrow'
);
const desktopFeatureArrowDown = document.querySelector(
  '.desktop__feature__down__arrow'
);
const desktopCompanyArrowDown = document.querySelector(
  '.desktop__company__down__arrow'
);
const desktopFeatureArrowUp = document.querySelector(
  '.desktop__feature__up__arrow'
);
const desktopCompanyArrowUp = document.querySelector(
  '.desktop__company__up__arrow'
);

mobileFeatureArrowDown.addEventListener('click', () => {
  document.querySelector('.mobile__feature__dropdown').style.display = 'block';
  document.querySelector('.down').style.display = 'none';
  document.querySelector('.up').style.display = 'inline-block';

  console.log('clicked');
});

mobileFeatureArrowUp.addEventListener('click', () => {
  document.querySelector('.mobile__feature__dropdown').style.display = 'none';
  document.querySelector('.down').style.display = 'inline-block';
  document.querySelector('.up').style.display = 'none';
  console.log('clicked');
});

mobileCompanyArrowDown.addEventListener('click', () => {
  document.querySelector('.mobile__company__dropdown').style.display = 'block';
  document.querySelector('.downC').style.display = 'none';
  document.querySelector('.upC').style.display = 'inline-block';

  console.log('clicked');
});

mobileCompanyArrowUp.addEventListener('click', () => {
  document.querySelector('.mobile__company__dropdown').style.display = 'none';
  document.querySelector('.downC').style.display = 'inline-block';
  document.querySelector('.upC').style.display = 'none';
  console.log('clicked');
});

desktopFeatureArrowDown.addEventListener('click', () => {
  document.querySelector('.d_feature__dropdown').style.display = 'block';
  document.querySelector('.downD').style.display = 'none';
  document.querySelector('.upD').style.display = 'inline-block';

  console.log('clicked');
});

desktopFeatureArrowUp.addEventListener('click', () => {
  document.querySelector('.d_feature__dropdown').style.display = 'none';
  document.querySelector('.downD').style.display = 'inline-block';
  document.querySelector('.upD').style.display = 'none';
  console.log('clicked');
});

desktopCompanyArrowDown.addEventListener('click', () => {
  document.querySelector('.d_company__dropdown').style.display = 'block';
  document.querySelector('.downCC').style.display = 'none';
  document.querySelector('.upCC').style.display = 'inline-block';

  console.log('clicked');
});

desktopCompanyArrowUp.addEventListener('click', () => {
  document.querySelector('.d_company__dropdown').style.display = 'none';
  document.querySelector('.downCC').style.display = 'inline-block';
  document.querySelector('.upCC').style.display = 'none';
  console.log('clicked');
});

open_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile__navigation').style.display = 'block';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.5)';
});

close_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile__navigation').style.display = 'none';
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(rgba(253, 251, 251), rgba(255, 255, 255, 0.993)';
});
