const panel = document.querySelector("#cover");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    scrub: 4,
    pinSpacing: false
});


// gsap.set(sections, {opacity:0,scale:0.8, y:50});
// sections.forEach((section)=>{
//   gsap.to(section,{
//     opacity: 1,
//     scale: 1,
//     y:0,
//     duration: 1,
//     ease:"power4.out",
//     scrollTrigger: {
//       trigger: section,
//       start: "bottom 95%", 
//       end: "top 20%",
//       scrub:2 ,
//       markers:true
//     }
//   });
// });