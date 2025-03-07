// const panel = document.querySelector("#cover");

// ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: true,
//     scrub: 4,
//     pinSpacing: false
// });



const cover = document.querySelector("#cover");
const me = document.querySelector("#me");

// #cover의 초기 설정 (페이드 아웃 및 scale 조정)
gsap.set(cover, { opacity: 1, scale: 1, y: 0 });

// #me의 초기 설정 (페이드 아웃 상태로 설정)
gsap.set(me, { opacity: 0, scale: 0.8, y: 50 });

// #cover 섹션에 대한 애니메이션 (스크롤 시 페이드 아웃 및 크기 감소)
gsap.to(cover, {
  opacity: 0,
  scale: 0.8,
  y: -50, // 위로 밀리면서 페이드 아웃
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: cover,
    start: "top top", 
    end: "bottom top", // #cover가 완전히 위로 밀릴 때까지
    scrub: 2,
    pin: true, // #cover를 고정시키는 효과
    pinSpacing: false
  }
});

// #me 섹션에 대한 애니메이션 (스크롤 시 페이드 인 및 크기 증가)
gsap.to(me, {
  opacity: 1,
  scale: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: me,
    start: "top 80%",  // #me 섹션이 화면에 들어오기 시작할 때
    end: "top 50%",    // #me 섹션이 화면에 거의 다 들어올 때
    scrub: 2,
  }
});

