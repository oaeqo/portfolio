gsap.registerPlugin(ScrollTrigger);


// const ani9 = gsap.timeline();
// ani9.to("#skill .card", {scale: 4})
//     .to("#skill .card", {autoAlpha: 0})

// ScrollTrigger.create({
//     animation: ani9,
//     trigger: "#skill",
//     start: "top center",
//     end: "+=3000",
//     scrub: true,
//     pin: true,
//     markers: false,
//     anticipatePin: 1

// });


// #skill 섹션에 대한 ScrollTrigger 설정
gsap.to("#skill > .card", {
  scrollTrigger: {
    trigger: "#skill",
    start: "bottom bottom", 
    end: "+=2000", 
    scrub: 2, 
    pin: true, 
    anticipatePin: 1
  },
  scale: 2, 
  opacity: 0,
  // autoAlpha: 0,
  transformOrigin: "center center", // 이미지 확대가 중앙에서 일어나도록
});
