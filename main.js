console.log('Hello World');


// Number 1
const numberOne = document.querySelector('.article__header');
numberOne.textContent = "Welcome to the Addam Blog";
console.log('number 1', numberOne);

// Number 2
const numberTwo = document.querySelectorAll('.article__header');
numberTwo[0].classList.add('important');
numberTwo[1].classList.add('important');
console.log('number 2', numberTwo);

// Number 3
const numberThree = document.querySelector('.dashed');
numberThree.parentNode.removeChild(numberThree);
console.log('number 3', numberThree);

// Number 4
const numberFour = document.querySelector('.article__footer');
numberFour.classList.add('goldenrod');
console.log('number 4', numberFour);


