// window.addEventListener('DOMContentLoaded', () => {
//   const navbar = document.querySelector('.navbar');
//   const homeSection = document.querySelector('#home');

//   if (!homeSection) {
//     console.error('Home section not found!');
//     return;
//   }

//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting) {
//         navbar.classList.add('show'); // Show navbar
//       } else {
//         navbar.classList.remove('show'); // Hide navbar
//       }
//     },
//     {
//       threshold: 0.5 // 👈 this should be inside an object
//     }
//   );

//   observer.observe(homeSection);
// });



window.addEventListener('load', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('show'); // triggers slide down
});
