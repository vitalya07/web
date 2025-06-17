const modal = document.querySelector('.modal');
const btnModal = document.querySelectorAll('[data-modal]');
btnModal.forEach(btn => {
    btn.addEventListener('click', showModal);
});

modal.addEventListener('click', (e)=> {
    if(e.target.classList.contains('modal-close') || e.target === modal) {
        closeModal()
    }
});

window.addEventListener('keydown', (e)=> {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
})

function showModal() {
    modal.classList.remove('hiden');
    modal.classList.add('show');    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hiden');
    document.body.style.overflow = '';
}








var splide = new Splide( '.portfolio-slide', {
    perPage: 3,
    rewind : true
} );

splide.mount();