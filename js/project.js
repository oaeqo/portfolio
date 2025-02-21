// 스크롤 이벤트 리스너
window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;  // 현재 스크롤 위치
  
  // .card 요소들을 가져옵니다
  const cards = document.querySelectorAll('.card');
  
  // 카드가 이동할 범위 계산 (여기서는 6개의 카드가 모두 스크롤에 따라 움직임)
  const moveAmount = Math.floor(scrollPosition / 20) * 20;  // 스크롤 위치에 따라 이동할 크기

  // 각 카드에 대해 효과를 적용
  cards.forEach((card, index) => {
      const cardOffset = index * 300;  // 각 카드가 시작하는 위치 (300px 간격으로 설정)
      
      if (scrollPosition > cardOffset) {
          // 각 카드가 나타날 때 스크롤 위치에 따라 이동
          card.style.transition = 'transform 0.3s ease-out';  // 부드럽게 이동
          card.style.transform = `translateX(${Math.min(scrollPosition - cardOffset, 300)}px)`; // 300px까지만 이동
      } else {
          // 카드가 아직 스크롤 위치에 오지 않았을 때 원위치로 설정
          card.style.transform = 'translateX(0)';
      }
  });
});
