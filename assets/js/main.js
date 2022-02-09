/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function openModalWork() {
    const modalWork = document.querySelector('#modal-work');
    modalWork.classList.add('show')
}

function closeModalWork(e, self = false) {
    if(self && e.target.id !== 'modal-work') return;

    const modalWork = document.querySelector('#modal-work');
    modalWork.classList.remove('show')
}

const workCard = document.querySelectorAll('.work__img');
workCard.forEach(n => n.addEventListener('click', openModalWork));


const btnCloseModalWork = document.querySelector('#modal-work button');
btnCloseModalWork.addEventListener('click', closeModalWork);

const modalWork = document.querySelector('#modal-work');
modalWork.addEventListener('click', (e) => closeModalWork(e, true));

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("formContact");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
        document.querySelector(".contact__message").classList.add('show')
    })
    .catch((error) => alert(error));
};

document.getElementById("formContact").addEventListener("submit", handleSubmit);


// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// });

// /*SCROLL HOME*/
// sr.reveal('.home__title',{}); 
// sr.reveal('.button',{delay: 200}); 
// sr.reveal('.home__img',{delay: 400}); 
// sr.reveal('.home__social-icon',{ interval: 200}); 

// /*SCROLL ABOUT*/
// sr.reveal('.about__img',{}); 
// sr.reveal('.about__subtitle',{delay: 400}); 
// sr.reveal('.about__text',{delay: 400}); 

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 
// sr.reveal('.skills__data',{interval: 200}); 
// sr.reveal('.skills__img',{delay: 600});

// /*SCROLL WORK*/
// sr.reveal('.work__img',{interval: 200}); 

// /*SCROLL CONTACT*/
// sr.reveal('.contact__input',{interval: 200}); 




