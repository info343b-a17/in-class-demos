'use strict';

// Classes
class Card {

    constructor(text){
        this.text = text; //defines an instance variable
        this.clickCount = 0;
    }

    getText() {
        return this.text;
    }

    //produce a DOM representation of this object
    render() {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.maxWidth = '300px';

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.textContent = this.text; //instance variable!
        cardDiv.appendChild(cardBody);

        //this refers to the card

        cardDiv.addEventListener('click', () => {
            this.clickCount++;
            cardBody.textContent = this.text + '('+this.clickCount+')';
        });

        return cardDiv;
    }

}

let content = document.querySelector('#content');

let messages = ['Hello World', 'Goodbye world', 'I need more sleep', "Happy Halloween", 'Bueller?'];

let cards = messages.map( (message) => new Card(message) )

cards.forEach( (card) => {content.appendChild(card.render()) });


// let helloCard = new Card("Hello world");
// let byeCard = new Card("Goodbye world");


// content.appendChild(helloCard.render());
// content.appendChild(byeCard.render());

//console.log( helloCard.render() );

// console.log( helloCard.getText() );
// console.log( byeCard.text );




// Arrow Functions


//Modules


