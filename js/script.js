let splide = new Splide( '.portfolio-slide', {
    perPage: 3,
    rewind : true,   
    gap: '3em', 
    autoWidth: true,
    breakpoints: {
		1025: {
			perPage: 2,
            gap: '1em',            
		},
        900: {
            arrows: false,
            pagination: true,
        },
        580: {
            perPage: 1,
        }
  }
} );

splide.mount();
const head = document.querySelector('.header');
const main = document.querySelector('.main');
const reverse = document.querySelector('.reverse');
let offSetMain = main.offsetHeight;



window.addEventListener('scroll', (e)=> {
    if(window.scrollY > offSetMain) {
        head.style.backgroundColor = '#2f2f2f';
        reverse.style.display = 'block'
    }  else {
        head.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        reverse.style.display = 'none'
    }
})
