document.addEventListener("DOMContentLoaded", function () {
	const body = document.getElementById("gradient");
	const color1 = document.querySelector(".color1");
	const color2 = document.querySelector(".color2");
	const randomBtn = document.querySelector(".random__btn");
	const cssText = document.querySelector("h3");
  
	// Function to set the background and update the text
	function setGradient() {
	  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	  cssText.textContent = `background: ${body.style.background};`;
	}
  
	// Function to generate a random color
	function getRandomColor() {
	  const letters = '0123456789ABCDEF';
	  let color = '#';
	  for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}
  
	// Event listener for the input change
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
  
	// Event listener for the random button click
	randomBtn.addEventListener("click", function() {
	  color1.value = getRandomColor();
	  color2.value = getRandomColor();
	  setGradient();
	});
  
	// Initialize the gradient on load
	setGradient();
  });
  