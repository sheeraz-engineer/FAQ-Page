document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faq = question.parentElement;
    const allFaqs = document.querySelectorAll('.faq');

    allFaqs.forEach(item => {
      if (item !== faq) item.classList.remove('active');
    });

    faq.classList.toggle('active');
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.faq').forEach(faq => faq.classList.remove('active'));
  }
});
