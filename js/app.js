window.addEventListener('load', () => {
   intiSubmit();
});

const intiSubmit = () => {
   // selection all element
   const form = document.querySelector('.form');
   const currentRating = document.querySelector('.current-rating');
   const input = document.querySelectorAll('input[type="radio"]');
   const card = document.querySelector('.card');

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      let selectedValue;
      input.forEach((el) => {
         if (!el.checked) {
            card.classList.add('error');
         } else if (el.checked) {
            selectedValue = el.value;
            card.classList.add('active');
            card.classList.remove('error');
         }
      });
      currentRating.innerHTML = selectedValue;
   });
};
