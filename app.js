const items =document.querySelectorAll('.accordion .items');
items.forEach(item => {
  const trigger=item.querySelector('.header');
  trigger.addEventListener('click' , () => {
    trigger.nextElementSibling.classList.toggle('active');
  });
});