window.addEventListener('scroll', function() {
  const cover = document.getElementById('cover');
  const coverPosition = cover.getBoundingClientRect().top;

  if (coverPosition < window.innerHeight * 0.8) {
      cover.style.transition = 'opacity 1.5s';
      cover.style.opacity = 1;
  } else {
      cover.style.opacity = 0;
  }
});

