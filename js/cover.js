const panel = document.querySelector("#cover");

ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    scrub: 4,
    pinSpacing: false
});

