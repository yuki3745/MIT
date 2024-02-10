'use strict';
{
  const menu = document.querySelector('.menu i');
  const menuContents = document.querySelector('.menu-contents');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuContents.classList.toggle('active');
  });

  {
    const targets = document.querySelectorAll('.card');
  
    function callback(entries, obs) {
  
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
    
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
    }
  
    const options = {
      threshold: 1,
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    targets.forEach(target => {
      observer.observe(target);
    });
  }
}