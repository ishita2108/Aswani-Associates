const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    let handleClick = () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    }
 

    burger.addEventListener('click', handleClick);
  
}
navSlide();

const myFunction = (e) => {
    console.log(window.scrollY);
    const yoffset = window.scrollY;
    if(yoffset<456){
        navService.classList.remove("active")
        navHome.classList.add("active")
    }
    else if(yoffset>456){
        navService.classList.add("active")
        navHome.classList.remove("active")

    }

}

const navHome = document.getElementById("nav-home")
const navService = document.getElementById("nav-services")