

// $('.center').slick({
//     slidesToShow: 5,
//     centerMode: true,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           arrows: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
// });
window.addEventListener('DOMContentLoaded', (event) => {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  const exitIcon = document.querySelector('.exit-icon');

  const checkWidthAndSetMenuState = () => {
      if (window.innerWidth < 992) {
          navMenu.classList.add('hide');
          navMenu.classList.remove('show');
      } else {
          navMenu.classList.add('show');
          navMenu.classList.remove('hide');
      }
  };

  // Set initial state
  checkWidthAndSetMenuState();

  menuIcon.addEventListener('click', () => {
      if (window.innerWidth < 992) {
          navMenu.classList.toggle('show');
          navMenu.classList.toggle('hide');
      }
  });

  exitIcon.addEventListener('click', () => {
      if (window.innerWidth < 992) {
          navMenu.classList.remove('show');
          navMenu.classList.add('hide');
      }
  });

  window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
          navMenu.classList.add('show');
          navMenu.classList.remove('hide');
      } else {
          // Chỉ cập nhật trạng thái nếu navMenu hiện đang hiển thị
          if (!navMenu.classList.contains('hide')) {
              navMenu.classList.add('hide');
              navMenu.classList.remove('show');
          }
      }
  });
});

