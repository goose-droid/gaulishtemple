let btn1 = document.querySelector('#lakeside_button');
let btn2 = document.querySelector('#forest_button');
let btn3 = document.querySelector('#seaside_button');
let btn4 = document.querySelector('#campfire_button');
let btn5 = document.querySelector('#mountains_button');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('photographer.jpg')"
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('Forest.jpg')"
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('seaside.jpg')"
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('campfire.jpg')"
});
btn5.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('mountains.jpg')"
});