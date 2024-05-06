const form = document.getElementById('opinionForm');
const stars = document.querySelectorAll('.star-widget input[type="radio"]');

stars.forEach(star => {
    star.addEventListener('click', (e) => {
        const rating = e.target.value;
        console.log(`Selected rating: ${rating}`);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const opinion = document.getElementById('opinion').value;
    const rating = document.querySelector('.star-widget input[type="radio"]:checked').value;
    console.log(`Opinion: ${opinion}`);
    console.log(`Rating: ${rating}`);
});