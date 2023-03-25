window.addEventListener('load', () => {
   intiSubmit();
});

const intiSubmit = () => {
   // selection all element
   const form = document.querySelector('.form');
   const currentRating = document.querySelector('.current-rating');
   const OutOf_Rating = document.querySelector('.out-of');
   const input = document.querySelectorAll('input[type="radio"]');

   input.forEach((el) => {
      let inputValue = el.value;
      let span = el.nextElementSibling;
      span.innerHTML = inputValue;
      OutOf_Rating.innerHTML = input.length;
   });

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      let preloader = document.querySelector('.preloader');
      let cardResponse = document.querySelector('.card-response');
      let defaultCard = document.querySelector('.default-card');

      preloader.style.display = 'block';
      setTimeout(() => {
         let selectedValue;
         input.forEach((el) => {
            if (el.checked) {
               selectedValue = el.value;
            }
         });

         preloader.style.display = 'none';
         defaultCard.style.display = 'none';
         cardResponse.style.display = 'block';
         currentRating.innerHTML = selectedValue;
      }, 5000);
   });
};
