gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".card");

// gsap.to("#wrap", {
//     x: () => `-${document.querySelector("#wrap").scrollWidth - window.innerWidth}px`,
//     ease: "none",
//     scrollTrigger: {
//         trigger: "#project",
//         start: "top top",
//         pin: true,
//         scrub: 1,
//         snap: {
//             snapTo: 1 / (sections.length - 1), // 각 카드별 스냅
//             duration: 0.3, // 스냅 지속 시간
//             delay: 0.1, // 반응 속도
//             ease: "none"
//         },
//         end: () => `+=${document.querySelector("#wrap").scrollWidth}`,
//     }
// });

