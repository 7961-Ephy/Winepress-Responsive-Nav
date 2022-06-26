function responsive(){
    let icon = document.querySelector('.icon');
    let nav = document.querySelector(".nav-links");
    let navLinks = document.querySelectorAll('.nav-links li');
    icon.addEventListener('click',function(){
        nav.classList.toggle('nav-active');

    });
}

responsive();
