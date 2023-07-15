const text = "A   TASTE   OF   PARIS";
const animatedText = document.querySelector('.animated-text');

let index = 0;
function displayText() {
  animatedText.textContent = text.substr(0, index);
  index++;
  if (index > text.length) {
    index=0;
  }

  if (index <= text.length) {
    setTimeout(displayText, 100);
    
  }
}

displayText();

const dineButton = document.querySelector('.dine-button');
dineButton.addEventListener('mouseover', function() {
  dineButton.style.fontSize = '18px'; 
});

dineButton.addEventListener('mouseout', function() {
  dineButton.style.fontSize = '16px'; 
});

const bookButton = document.querySelector('.book-button');
dineButton.addEventListener('mouseover', function() {
  
  dineButton.style.fontSize = '18px'; 
});

bookButton.addEventListener('mouseout', function() {
  
  dineButton.style.fontSize = '16px'; 
});