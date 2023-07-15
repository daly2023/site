const buttons = document.querySelectorAll('.buy1, .buy2, .buy3');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.color = '#000000'; // Change text color to green
    button.style.fontSize = '18px'; // Increase font size
  });

  button.addEventListener('mouseout', () => {
    button.style.color = '#000000'; // Reset text color
    button.style.fontSize = '16px'; // Reset font size
  });
});