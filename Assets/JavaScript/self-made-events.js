document.getElementById('header-nav-toggle').addEventListener('click', function () {
    document.getElementById('header-nav-links').classList.toggle('hidden');
});
document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('hidden');
});

// JavaScript to handle scroll event
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('home_header');
    const navbar = document.getElementById('home_navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 70) {
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
            navbar.classList.remove('opacity-1');
            navbar.classList.add('opacity-0');
        } else {
            header.classList.remove('header-visible');
            header.classList.add('header-hidden');
            navbar.classList.remove('opacity-0');
            navbar.classList.add('opacity-1');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.motivList li');
    listItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const arrows = document.querySelectorAll('.motivList img');
            arrows.forEach((arrow, arrowIndex) => {
                if (arrowIndex === index) {
                    arrow.classList.toggle('hide');
                    arrow.classList.toggle('visible');
                } else {
                    arrow.classList.add('hide');
                    arrow.classList.remove('visible');
                }
            });
        });
    });
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}

// JOIN NOW POPUP START
document.getElementById('openJoinNowPopup').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('joinNowPopup').style.display = 'block';
    document.getElementById('joinNowOverlay').style.display = 'block';
  });
  
  document.getElementById('closeJoinNowPopup').addEventListener('click', function () {
    document.getElementById('joinNowPopup').style.display = 'none';
    document.getElementById('joinNowOverlay').style.display = 'none';
    document.getElementById('joinNowSubPopup').classList.add('hidden'); // Ensure sub-popup is hidden
  });
  
  // Get form and input elements for easier reference
  const joinNowForm = document.getElementById('joinNowForm');
  const fullNameInput = document.getElementById('fullName');
  const emailAddressInput = document.getElementById('emailAddress');
  const upgradeButton = document.getElementById('upgradeYourMind');
  const joinNowSubPopup = document.getElementById('joinNowSubPopup');
  
  upgradeButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    const fullName = fullNameInput.value.trim();
    const emailAddress = emailAddressInput.value.trim();
  
    let isValid = true;
    let errorMessage = '';
  
    if (fullName === '' && emailAddress === '') {
      alert('Please fill all fields');
      isValid = false;
    } else if (fullName === '') {
      alert('Please enter your full name.');
      isValid = false;
    } else if (emailAddress === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
    if (isValid) {
      console.log('Form submitted Successfully:', fullName, emailAddress);
      fullNameInput.value = '';
      emailAddressInput.value = '';
      joinNowSubPopup.classList.remove('hidden'); // Show sub-popup
      joinNowSubPopup.classList.add('block');
    }
  });  
// JOIN NOW POPUP END