// // Smooth Scroll for Navbar Links
// document.querySelectorAll('nav a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Add a sticky class to the navbar when you reach its scroll position
// window.onscroll = function() {
//     stickyNavbar();
// };

// let navbar = document.querySelector('nav');
// let sticky = navbar.offsetTop;

// function stickyNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// }
