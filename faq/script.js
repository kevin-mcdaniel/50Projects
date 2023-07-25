const elFaqs = document.querySelectorAll('.faq-toggle');

elFaqs.forEach(faq => {
    faq.addEventListener('click', () => {
        //if we wanted to collapse all others we could do so here.
        faq.parentNode.classList.toggle('active');
    })
})