document.addEventListener("DOMContentLoaded", function () {
   
    const searchForm = document.querySelector('.form-inline');
    const searchInput = searchForm.querySelector('input[type="search"]');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase();
        const bookCards = document.querySelectorAll('.card');

        bookCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const author = card.querySelector('.card-text').textContent.toLowerCase();
            if (title.includes(query) || author.includes(query)) {
                card.parentElement.style.display = 'block';
            } else {
                card.parentElement.style.display = 'none';
            }
        });
    });

 
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

       
        contactForm.reset();

        $('#contactModal').modal('hide');

        
        alert('Thank you for contacting us!');
    });
});
