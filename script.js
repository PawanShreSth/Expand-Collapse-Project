const body = document.body;
const cardBody = document.querySelector('.card-body');

body.addEventListener('click', e => {
  if (!e.target.matches('.expand-button')) return;

  const clickedButton = e.target;

  const card = clickedButton.closest('.card');

  const cardBody = card.querySelector('.card-body');

  cardBody.classList.toggle('show');

  if (!cardBody.classList.contains('show')) {
    clickedButton.innerText = 'Expand';
    return;
  }

  clickedButton.innerText = 'Collapse';
});
