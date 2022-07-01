AOS.init();

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } })
        tl.to('.headline', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2 })
        tl.to('.subtitle', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, "-=2")
        tl.to('.hero-btn', { opacity: 1, y: 0 }, "-=1.5")
        tl.to('.hero-picture', { opacity: 1, y: 0 }, "-=1.5")
        tl.to('.navbar-bordered', { opacity: 1, y: 0 }, "-=2.2")
        tl.to('.half-circle', { 'clip-path': 'circle(100% at 50% 50%)', opacity: 1, y: 0 }, "-=1")

window.addEventListener('scroll', reveal);

        function reveal() {
          var reveals = document.querySelectorAll('.reveal');

          for (var i = 0; i < reveals.length; i++) {

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 30;

            if (revealtop < windowheight - revealpoint) {
              reveals[i].classList.add('active');
            }
            else {
              reveals[i].classList.remove('active');
            }
          }
        }

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})