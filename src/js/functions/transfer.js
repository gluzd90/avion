import TransferElements from 'transfer-elements';
 let headerList = document.querySelector('.header__list-top')
new TransferElements(
  {
    sourceElement: headerList,
    breakpoints: {
      767: {
        targetElement: document.querySelector('.header__nav'),
        targetPosition: 1
      }
    }
  }
);
