
const element = document.getElementById('typed-line');

const typedItem = {
  stringsElement: element,
  strings: ['<h1>Well Fast Delivery <br> Your delivery is safe with us </h1>', '&amp; <br> <h1>Security and commitment for over 15 years. </h1> <br> <h1>Entre em contato com a gente, entregamos em qualquer lugar do pais<h1><br>'],
  typeSpeed: 40
};

const options = new Typed(element,  {
strings: ['<h1>Well Fast Deliveries, <br> Your delivery will be safe, <br> with Us!</h1>'],
typeSpeed: 75,      
backSpeed: 25,        
bindInputFocusEvents: true,        
loop: true,        
cursorChar: '_',        
backDelay: 1000,        
startDelay: 1000,
margin: 0
});