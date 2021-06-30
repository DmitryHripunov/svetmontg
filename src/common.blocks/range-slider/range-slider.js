import noUiSlider from 'nouislider/distribute/nouislider';
import wNumb from 'wnumb/wNumb';

// function formRefresh() {
//   const form = $('#js-form').closest('form');
//   const params = form.serialize();
//   const curUrl = `${location.protocol}//${location.host}${location.pathname}`;
//   const path = `${curUrl}?${params}`;
//   $.ajax({
//     method: 'GET',
//     url: path,
//     dataType: 'json',
//   }).done((data) => {
//     $('').html(data.label_panel);
//     $('').html(data.product_list);
//     $('').html(data.pages);
//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  const priceControlList = document.querySelectorAll('.js-range-slider');

  if (priceControlList.length) {
    for (let i = 0; i < priceControlList.length; i++) {
      const keypressSlider = priceControlList[i].querySelector('.range-control');
      const input0 = priceControlList[i].querySelector('.range-input-0');
      const input1 = priceControlList[i].querySelector('.range-input-1');
      const inputs = [input0, input1];
      const noUiSliderMin = Number(input0.getAttribute('data-price-min'));
      const noUiSliderMax = Number(input1.getAttribute('data-price-max'));
      let noUiSliderCurrentMin = Number(input0.getAttribute('data-price-current-min'));
      let noUiSliderCurrentMax = Number(input1.getAttribute('data-price-current-max'));

      if (noUiSliderCurrentMin === '') {
        noUiSliderCurrentMin = noUiSliderMin;
      }

      if (noUiSliderCurrentMax === '') {
        noUiSliderCurrentMax = noUiSliderMax;
      }

      noUiSlider.create(keypressSlider, {
        start: [noUiSliderCurrentMin, noUiSliderCurrentMax],
        connect: true,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: noUiSliderMin,
          max: noUiSliderMax,
        },
      });

      keypressSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = values[handle];
      });
    }
  }
});

