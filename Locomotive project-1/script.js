// Smooth scroll locomotive js

//lerp:0.1-1 the value basically decides the smooth scroll.

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});