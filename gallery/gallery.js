const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-button.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Tap-to-toggle captions for mobile
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    galleryItems.forEach(i => {
      if (i !== item) i.classList.remove('show-caption');
    });
    item.classList.toggle('show-caption');
  });
});