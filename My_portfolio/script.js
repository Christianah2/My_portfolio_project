// JavaScript code to create typing effect
  const typedText = document.querySelector('.typed-text-output');
  const textArray = ["Web Designer,", "Web Developer,", "Front End Developer,", "Apps Designer,", "Apps Developer"];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textIndex].length) {
      typedText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here
    } else {
      setTimeout(erase, 1000); // Wait before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Adjust erasing speed here
    } else {
      textIndex++;
      if (textIndex >= textArray.length) {
        textIndex = 0;
      }
      setTimeout(type, 500); // Wait before typing next string
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000); // Start typing after 1 second
  });

