document.querySelector('.signupBtn').addEventListener('click', () => {
    const email = document.querySelector('.inputend').value;
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
    } else {
      alert('Subscribed successfully!');
    }
  });


 
  window.addEventListener('scroll', showAnimations);
  window.addEventListener('load', showAnimations);

  function showAnimations() {
    const elements = document.querySelectorAll('.animate');
    const triggerBottom = window.innerHeight - 100;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

