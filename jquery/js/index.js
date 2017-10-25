'use strict';

let h1 = $('h1');

h1.text('An awesome playground');
console.log(h1.text());

h1.click(function(){
    h1.slideUp(1000);
})

let ball = $('circle');
//ball.attr('cx', 225).attr('cy', 95);
ball.attr( {cx:225, cy:95 } );

let buttons = $('button');
buttons.addClass('btn-success');

//let newPara = document.createElement('p');
let newPara = $('<p>Hello world!</p>');
$('#text .card-body').append(newPara);
$('#text .card-body').prepend('<p>First hello</p>');

const state = {atTop: true};
//ball.addEventListener('clic', function()...)
ball.click(function() {
    if(state.atTop){
        //ball.attr( {cx:415, cy:320 } );
        ball.animate( {cx:415, cy:320}, 1000, 
            function() { //run after the animation is done
                state.atTop = false;            
            })
    }
    else {
        ball.attr( {cx:225, cy:95 } );        
        state.atTop = true;
    }
})

$('img')
    .mouseenter(function(event) {
        $(event.target).attr('src','img/surprised.png');
    })
    .mouseleave(function(event){
        $(event.target).attr('src','img/happy.png');        
    })

    $('#collapseAll').click(function(){
        $('.collapse').collapse('hide');
    });