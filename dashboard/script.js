let iaq = 0;

function changeIaqValue(newValue) {
    iaq = newValue;
  }
  
  // Example usage to change iaq globally
  changeIaqValue(75); // Change iaq value to 75
  
  // Accessing iaq outside the function
  console.log('Outside function, iaq value:', iaq);