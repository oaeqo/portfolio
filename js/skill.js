// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
  // 현재 스크롤 위치
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollPosition);

  // .envel과 .letter 요소 가져오기
  const envel = document.querySelector('.envel');
  const letter = document.querySelector('.letter');

  // 1. 스크롤 위치가 3367일 때부터 2초 동안 서서히 보이게 하기
  if (scrollPosition >= 14765) {
      envel.style.opacity = 1;  // .envel 보이게
      envel.style.transition = 'opacity 0.3s ease-in-out';  // 2초간 서서히 보이기

      letter.style.opacity = 1;  // .letter 보이게
      letter.style.transition = 'opacity 0.5s ease-in-out';  // 2초간 서서히 보이기
  }


 // 2. 스크롤 위치가 3567부터 .letter가 위로 올라가기
  if (scrollPosition >= 15016) {
    const moveAmount = Math.min(Math.floor((scrollPosition - 15016) / 5) * 5, 200);
    letter.style.transform = `translateY(-${moveAmount}px)`;

    if (moveAmount === 200) {
      letter.style.zIndex = 2;
      envel.style.zIndex = 1;
    } else {
      letter.style.zIndex = 1;
      envel.style.zIndex = 2;
    }
  }
});

// 흔들리는 애니메이션 효과 (스크롤과 무관하게 실행)
function bounceAnimation() {
  const envel = document.querySelector('.envel');
  const letter = document.querySelector('.letter');

  if (envel && letter) {
    envel.style.top = `${350 + 20 * Math.sin(Date.now() / 500)}px`;
    letter.style.top = `${350 + 20 * Math.sin(Date.now() / 500)}px`;
  }
  requestAnimationFrame(bounceAnimation);
}

bounceAnimation();