/*-------------- mixitup Filter----------  */

let mixerProjects = new mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});    


/*Active Work*/
const linkwork = decument.querySelectorAll('.category__btn');


function activeWork(){
    linkwork.forEach((a) => a.classList.remove('active-Work'));
    this.classList.add('activework');
}

linkwork.forEach((a) => a.addEventListener('click, activeWork'));


/*-------------- Testimonial swiper ----------*/ 

  var testiswiper =  Swiper(".testimonial__conatiner", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });

/*-------------- Contact Form ----------*/
   
const contactForm = document.getElementById('contact-form'),contactName = document.getElementById('contact-name'),contacEmail = document.getElementById('contact-eamil'), Message = document.getElementById(message),cotactMessage = document.getElementById(contact- message);


const sendEmail = (e) => {
    e.preventDefault();
    // check if the field has a value
    if(
       contactName.value === '' ||
        contacEmail.value === '' ||
        message.value === ''
    ){
        // add and remove color 
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-derk')
        
         // show message
        cotactMessage.textContent = 'Write all the input fields';
    }else{
        // serviceID - templateID - #form - publickey 
        emailjs.sendForm('','','','')
    }
};


contactForm.addEventListener('submit',sendEmail);





















