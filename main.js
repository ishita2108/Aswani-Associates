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

var liItems = document.querySelectorAll(".accordion_wrap ul li");
var ulItems = document.querySelector('.accordion_wrap ul');

liItems.forEach(function(item){
    item.addEventListener("click", function(){
        console.log("HEY")
        const wetherActive = item.classList.contains('active')
        liItems.forEach(function(item){
            item.classList.remove('active');
        })
        if(wetherActive){
            item.classList.remove('active');
        }
        else{item.classList.add('active');}
        
    })
})
ulItems.addEventListener('mouseleave', function(){
    liItems.forEach(function(item){
        item.classList.remove('active');
    })
})




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