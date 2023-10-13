function customSelect(dropdown, menuItem) {
  const selectedMenu = document.querySelector(dropdown);
  const selectedMenuText = selectedMenu.querySelector('p');
  const menuItems = document.querySelector(menuItem);
  const itemLists = menuItems.querySelectorAll('li');

  selectedMenu.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    selectedMenu.classList.toggle('active');
    menuItems.classList.toggle('active');
  });

  itemLists.forEach((item) => {
    item.addEventListener('click', (e) => {
      itemLists.forEach((li) => li.classList.remove('active'));
      e.target.classList.add('active');
      selectedMenuText.innerText = item.querySelector('.item-text').innerText;
      menuItems.classList.remove('active');
      selectedMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', () => {
    selectedMenu.classList.remove('active');
    menuItems.classList.remove('active');
  });
}

export default customSelect;
