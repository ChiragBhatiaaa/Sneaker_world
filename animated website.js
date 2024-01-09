let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.front-page',
        start: 'top',
        end: "100%",
        scrub: true,
        pin: true
    }
});

// tl.fromTo(
//     ".intro-sneaker",
//     {opacity:1, clipPath:"circle(75%)"},
//     {opacity:0, clipPath:"circle(0%)", duration:0.5} 
// );

tl.fromTo(
    ".front-page",
    { clipPath: "circle(5%)" },
    { clipPath: "circle(75%)", duration: 3}
 );

tl.fromTo(
    ".intro-sneaker", 
    {scale: 1}, 
    {scale: 0, opacity: 0}, 
    "-=3"
);

 tl.fromTo(
    ".title",
    {opacity:0},
    {opacity:1, duration:1} 
);

tl.fromTo(
    ".sub-title",
    {opacity:0},
    {opacity:1, duration:1} 
);
