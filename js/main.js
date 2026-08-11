document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var modal = document.getElementById('detail-modal');
  var modalBody = document.getElementById('modal-content');
  var modalTitle = document.getElementById('modal-title');
  var modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('[data-detail]').forEach(function (card) {
    card.addEventListener('click', function () {
      var id = card.getAttribute('data-detail');
      var content = document.getElementById('detail-' + id);
      if (content) {
        modalTitle.textContent = card.getAttribute('data-name') || '';
        modalBody.innerHTML = content.innerHTML;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }
});
