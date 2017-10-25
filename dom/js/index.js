'use strict';

let h1 = document.querySelector('h1');
console.log(h1);

let subheadingElem = document.querySelector('header p');
console.log(subheadingElem);

subheadingElem.innerHTML = subheadingElem.textContent+ " <em>Professor Ross</em>";

let img = document.querySelector('img');

let links = document.querySelectorAll('a');
links.forEach(function(link){
    link.target = "_blank";
});

let important = document.querySelector('.important');
important.classList.add('font-italic');
important.style.color = 'blue';
important.style.fontWeight = 'bold';

let newLink = document.createElement('li');
newLink.innerHTML = '<a href="https://www.youtube.com">Youtube</a>';
console.log(newLink);

let list = document.querySelector('ul');
list.insertBefore(newLink, document.querySelector('li'));

let button = document.querySelector('button');
button.addEventListener('click', function(){
    console.log("You clicked me!");
    state.clickCount++;
    button.textContent = "You clicked me "+state.clickCount+" times!";
    renderCookies();
});

document.querySelector('#button2').addEventListener('click', function() {
    state.clickCount += 4;
    renderCookies();
})

let state = {
    currentImage:'img/puppy.jpg',
    clickCount: 0
};

img.addEventListener('click', function() {
    if(state.currentImage === 'img/puppy.jpg'){
        state.currentImage = 'img/husky.jpg';
    } else {
        state.currentImage = 'img/puppy.jpg';        
    }
    img.src = state.currentImage;    
});

function renderCookies() {
    let jar = document.querySelector('#cookie-jar');
    jar.innerHTML = '';

    for(let i=0; i<state.clickCount; i++){
        let cookie = document.createElement('img');
        cookie.src = "img/cookie.png";
        jar.appendChild(cookie);
    }
}