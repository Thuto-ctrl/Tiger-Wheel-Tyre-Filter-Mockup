document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const clearButton = document.querySelector('#clear-filters');
  const sizeInput = document.querySelector('#size-input');

  // Price range controls
  const minSlider = document.getElementById('price-min');
  const maxSlider = document.getElementById('price-max');
  const minOutput = document.getElementById('min-price');
  const maxOutput = document.getElementById('max-price');

  function updatePrices() {
    let minVal = parseInt(minSlider.value);
    let maxVal = parseInt(maxSlider.value);
    if (minVal > maxVal) {
      [minSlider.value, maxSlider.value] = [maxSlider.value, minSlider.value];
    }
    minOutput.textContent = minSlider.value;
    maxOutput.textContent = maxSlider.value;
  }

  if (minSlider && maxSlider) {
    minSlider.addEventListener('input', updatePrices);
    maxSlider.addEventListener('input', updatePrices);
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      console.log(`Checkbox ${cb.nextElementSibling.innerText} changed: ${cb.checked}`);
    });
  });

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      checkboxes.forEach(cb => cb.checked = false);
      if (sizeInput) sizeInput.value = '';
      if (minSlider && maxSlider) {
        minSlider.value = 500;
        maxSlider.value = 5000;
        updatePrices();
      }
    });
  }
});
