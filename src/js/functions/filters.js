const filtersBtn = document.querySelector(".catalog__mobile--btn");
const catalog = document.querySelector(".catalog__filter")


if (filtersBtn) {
  console.log(catalog)
  filtersBtn.addEventListener('click', () => {
    filtersBtn.classList.toggle('catalog__mobile-btn--active');
    catalog.classList.toggle('catalog__filter--active')
  })
}
