 //-------------------------------------------------
  const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
//----------js for login and sign up page----------
 const loginOverlay = document.getElementById('loginOverlay');
    const signupOverlay = document.getElementById('signupOverlay');

    // Open popups
    document.getElementById('openLogin').onclick = () => {
      loginOverlay.style.display = 'flex';
    };
    document.getElementById('openSignup').onclick = () => {
      signupOverlay.style.display = 'flex';
    };
//----------------------------------------------------------------------
// Open popups
    document.getElementById('openLogin1').onclick = () => {
      loginOverlay.style.display = 'flex';
    };
    document.getElementById('openSignup1').onclick = () => {
      signupOverlay.style.display = 'flex';
    };
//----------------------------------------------------------------------
    // Close popup
    function closePopup(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Switch between login and signup
    document.getElementById('switchToSignup').onclick = () => {
      loginOverlay.style.display = 'none';
      signupOverlay.style.display = 'flex';
    };

    document.getElementById('switchToLogin').onclick = () => {
      signupOverlay.style.display = 'none';
      loginOverlay.style.display = 'flex';
    };

    // Close popup when clicking outside the box
    window.onclick = (event) => {
      if (event.target === loginOverlay) loginOverlay.style.display = 'none';
      if (event.target === signupOverlay) signupOverlay.style.display = 'none';
    };
    //-----------------------------------done----------------------------------------