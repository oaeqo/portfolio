window.addEventListener('scroll', function() {
  const mePic = document.querySelector('#me .pic');
  const mePosition = mePic.getBoundingClientRect().top;

  if (mePosition < window.innerHeight * 0.8) {
      mePic.style.transition = 'transform 1s, opacity 1s';
      mePic.style.transform = 'translateY(0)';
      mePic.style.opacity = 1;
  } else {
      mePic.style.transform = 'translateY(50px)';
      mePic.style.opacity = 0;
  }
});