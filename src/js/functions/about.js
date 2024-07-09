const noticeEl = document.querySelector('.notice');

if(noticeEl) {
  const noticeBtn = document.querySelector('.notice__btn');
  noticeBtn.addEventListener('click', () => {
    noticeEl.classList.add('notice--hidden')
  })
}
