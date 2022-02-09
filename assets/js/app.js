const { createApp } = Vue

const app = createApp({
    mounted() {
        /*===== SCROLL REVEAL ANIMATION =====*/
        const sr = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        /*SCROLL HOME*/
        sr.reveal('.home__title',{}); 
        sr.reveal('.button',{delay: 200}); 
        sr.reveal('.home__img',{delay: 400}); 
        sr.reveal('.home__social-icon',{ interval: 200}); 

        /*SCROLL ABOUT*/
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 400}); 
        sr.reveal('.about__text',{delay: 400}); 

        /*SCROLL SKILLS*/
        sr.reveal('.skills__subtitle',{}); 
        sr.reveal('.skills__text',{}); 
        sr.reveal('.skills__data',{interval: 200}); 
        sr.reveal('.skills__img',{delay: 600});

        /*SCROLL WORK*/
        sr.reveal('.work__img',{interval: 200}); 

        /*SCROLL CONTACT*/
        sr.reveal('.contact__input',{interval: 200}); 
    },
    async created(){
        const response = await fetch('assets/data/portfolio.json')
        const data = await response.json()
        this.jobs = data.filter(job => !job.disabled)
    },
    data() {
        return {
            jobs: [
                { title: 'Dinner In The Sky', about: 'a nice description', image: 'assets/img/work1.jpg' },
                { title: 'Compra Certa chat bot', about: 'a nice description', image: 'assets/img/work2.jpg' },
                { title: 'As Crônicas dos mortos website', about: 'a nice description', image: 'assets/img/work3.jpg' },
                { title: 'Picturen app', about: 'a nice description', image: 'assets/img/work4.jpg' },
                { title: 'Svetlana Plantas website', about: 'a nice description', image: 'assets/img/work5.jpg' },
                { title: 'Decorati calculator', about: 'a nice description', image: 'assets/img/work6.jpg' },
            ]
        }
    }, 
    methods: {
        openModalWork(job) {
            const modalWork = document.querySelector('#modal-work');
            modalWork.querySelector('h2').innerText = job.title
            modalWork.querySelector('p').innerText = job.about
            modalWork.querySelector('img').src = job.image
            modalWork.classList.add('show')
        },

        getJobs(){
            
        }
    }
})

app.mount('#appWork')