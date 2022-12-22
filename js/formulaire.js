
  // Récupération de tous les boutons "Réserver"
  const buyButtons = document.querySelectorAll('.buy');
  
  // Ajout de l'événement "click" sur chaque bouton
  buyButtons.forEach(button => {
    button.addEventListener('click', event => {
      // Récupération du formulaire correspondant au bouton cliqué
      const form = event.target.closest('.product-details').nextElementSibling.querySelector('.reservation-form');
      
      // Afficher le formulaire en modifiant la propriété "display"
      form.style.display = 'block';
    });
  });

