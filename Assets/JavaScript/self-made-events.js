var headerNavToggle = document.getElementById('header-nav-toggle');
if (headerNavToggle) {
    headerNavToggle.addEventListener('click', function () {
        var headerNavLinks = document.getElementById('header-nav-links');
        if (headerNavLinks) {
            headerNavLinks.classList.toggle('hidden');
        }
    });
}

document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('hidden');
});

// JavaScript to handle scroll event
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('home_header');
    const navbar = document.getElementById('home_navbar');

    if (header && navbar && (header.classList.contains('header-hidden') || header.classList.contains('header-visible'))) {
        window.addEventListener('scroll', function () {
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
    }
});

// MY STORY LIST ITEM ARROW HANDLING
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.motivList li');
    listItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            const arrows = document.querySelectorAll('.motivList img');
            arrows.forEach((arrow, arrowIndex) => {
                if (arrowIndex === index) {
                    arrow.classList.remove('hide');
                    arrow.classList.add('visible');
                } else {
                    arrow.classList.add('hide');
                    arrow.classList.remove('visible');
                }
            });
        });
    });
});

//MY STORY IMAGE HANDLING ON CHANGE OF LIST ITEM
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.motivList li');
    const images = {
        image1: document.getElementById('image1'),
        image2: document.getElementById('image2'),
        image3: document.getElementById('image3')
    };

    const imageSources = {
        item1: {
            image1: './Assets/Images/myStory/CEO-of-MOTIV-1.png',
            image2: './Assets/Images/myStory/CEO-of-MOTIV-2.png',
            image3: './Assets/Images/myStory/CEO-of-MOTIV-3.png'
        },
        item2: {
            image1: './Assets/Images/myStory/Serial-1.png',
            image2: './Assets/Images/myStory/Serial-2.png',
            image3: './Assets/Images/myStory/Serial-3.png'
        },
        item3: {
            image1: './Assets/Images/myStory/Mind-1.png',
            image2: './Assets/Images/myStory/Mind-2.png',
            image3: './Assets/Images/myStory/Mind-3.png'
        },
        item4: {
            image1: './Assets/Images/myStory/speaker-1.png',
            image2: './Assets/Images/myStory/speaker-2.png',
            image3: './Assets/Images/myStory/speaker-3.png'
        },
        item5: {
            image1: './Assets/Images/myStory/Athlete-1.png',
            image2: './Assets/Images/myStory/Athlete-2.png',
            image3: './Assets/Images/myStory/Athlete-3.png'
        },
        item6: {
            image1: './Assets/Images/myStory/Human-1.png',
            image2: './Assets/Images/myStory/Human-2.png',
            image3: './Assets/Images/myStory/Human-3.png'
        }
    };

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            const itemId = item.id;
            const sources = imageSources[itemId];

            if (sources) {
                images.image1.src = sources.image1;
                images.image2.src = sources.image2;
                images.image3.src = sources.image3;
            }
        });
    });
});

// ACCORDIAN HANDLING
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
var openJoinNowPopup = document.getElementById('openJoinNowPopup');
var closeJoinNowPopup = document.getElementById('closeJoinNowPopup');

if (openJoinNowPopup) {
    openJoinNowPopup.addEventListener('click', function (event) {
        event.preventDefault();
        var joinNowPopup = document.getElementById('joinNowPopup');
        var joinNowOverlay = document.getElementById('joinNowOverlay');
        if (joinNowPopup) {
            joinNowPopup.style.display = 'block';
        }
        if (joinNowOverlay) {
            joinNowOverlay.style.display = 'block';
        }
    });
}

if (closeJoinNowPopup) {
    closeJoinNowPopup.addEventListener('click', function () {
        var joinNowPopup = document.getElementById('joinNowPopup');
        var joinNowOverlay = document.getElementById('joinNowOverlay');
        var joinNowSubPopup = document.getElementById('joinNowSubPopup');
        if (joinNowPopup) {
            joinNowPopup.style.display = 'none';
        }
        if (joinNowOverlay) {
            joinNowOverlay.style.display = 'none';
        }
        if (joinNowSubPopup) {
            joinNowSubPopup.classList.add('hidden');
        }
    });
}

// Get form and input elements for easier reference
const joinNowForm = document.getElementById('joinNowForm');
const fullNameInput = document.getElementById('fullName');
const emailAddressInput = document.getElementById('emailAddress');
const upgradeButton = document.getElementById('upgradeYourMind');
const joinNowSubPopup = document.getElementById('joinNowSubPopup');

if (upgradeButton) {
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
}
// JOIN NOW POPUP END