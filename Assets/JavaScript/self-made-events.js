document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('hidden');
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

function toggleAccordion(event) {
    const button = event.currentTarget;
    const answer = button.nextElementSibling;
    const arrow = button.querySelector('svg');

    if (answer.classList.contains('max-h-0')) {
        answer.classList.remove('max-h-0');
        answer.classList.add('max-h-screen');
    } else {
        answer.classList.remove('max-h-screen');
        answer.classList.add('max-h-0');
    }

    arrow.classList.toggle('rotate-180');
}