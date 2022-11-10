

gsap.registerPlugin(ScrollTrigger);


var t1 = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "Back.easeOut.config(2)",
        opacity: 0,
        y: 100,
        stagger: 0.2,
        markers: true,
    },
});

t1.from(
    ".p1",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "left",
    },
    "-=.5"
);
t1.from(
    ".p2",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "right",
    },
    "-=.5"
);
t1.from(
    ".title",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "center",
    },
    "-=.5"
);
t1.from(
    ".text",
    {
        delay: 0.2,
        scale: 1,
        transformOrigin: "center",
    },
    "-=.5"
);


var t2 = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "Back.easeOut.config(2)",
        // opacity: 0,
        // y: 100,
        stagger: 0.2,
        markers: true,
    },
});

t2.from(
    ".i1",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "left",
    },
    "-=.5"
);
t2.from(
    ".i2",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "left",
    },
    "-=.5"
);
t2.from(
    ".i3",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "left",
    },
    "-=.5"
);
t2.from(
    ".i4",
    {
        delay: 0.2,
        scale: 0,
        transformOrigin: "left",
    },
    "-=.5"
);

var t3 = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "Back.easeOut.config(2)",
        // opacity: 0,
        // y: 100,
        stagger: 0.2,
        markers: true,
    },
});

t3.from(
    ".c1",
    {
        delay: 0.2,
        y: -300,
        opacity: 0,
        transformOrigin: "top",
    },
    "-=.5"
);

t3.from(
    ".c3",
    {
        delay: 0.2,
        y: -300,
        opacity: 0,

        transformOrigin: "top",
    },
    "-=.5"
);

t3.from(
    ".c2",
    {
        delay: 0.2,
        y: -300,
        opacity: 0,
        transformOrigin: "top",
    },
    "-=.5"
);






    
