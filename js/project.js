document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
    const startScroll = 2300; // 첫 번째 카드가 나타나는 기준 스크롤 위치
    const scrollStep = 100; // 스크롤이 100px 증가할 때마다 다음 카드 등장
  
    function updateCards() {
      let scrollY = window.scrollY;
      
      // 현재 스크롤 위치에서 몇 번째 카드가 보여야 하는지 계산
      let newIndex = Math.max(0, Math.floor((scrollY - startScroll) / scrollStep));
  
      if (newIndex !== currentIndex) {
        currentIndex = Math.min(newIndex, cards.length - 1);
  
        cards.forEach((card, index) => {
          if (index < currentIndex) {
            card.style.opacity = "0"; // 이전 카드는 숨김
          } else if (index === currentIndex) {
            card.style.opacity = "1"; // 현재 카드만 보이게
            card.style.transform = "translateY(0)"; // 정상 위치
          } else {
            card.style.opacity = "0"; // 다음 카드들은 안 보이게
            card.style.transform = "translateY(100px)"; // 아래쪽에서 대기
          }
        });
      }
    }
  
    // 초기 카드 상태 설정
    cards.forEach((card, index) => {
      card.style.opacity = index === 0 ? "1" : "0";
      card.style.transform = index === 0 ? "translateY(0)" : "translateY(100px)";
      card.style.transition = "opacity 2s ease, transform 1s ease-out";
    });
  
    window.addEventListener("scroll", updateCards);
  });
  