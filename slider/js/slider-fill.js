const slider = document.querySelector('.slider-fill');

slider.addEventListener('input', (event) => {
  let percentage =
    ((event.target.value - event.target.min) / (event.target.max - event.target.min)) * 100;

  slider.style =
    'background: linear-gradient(to right, red, red ' +
    percentage +
    '%, #BDC3C7 ' +
    percentage +
    '%, #BDC3C7 100%)';
});
