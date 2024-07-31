// Script per EmailJS
(function() {
  emailjs.init("y9tGOqEi4C9vJ0Bt5");
})();

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_2al1oih', 'template_gasclsl', this)
        .then(function() {
            console.log('Email inviata con successo!');
            alert('Messaggio inviato con successo!');
            form.reset();
        }, function(error) {
            console.log('Errore nell\'invio dell\'email:', error);
            alert('Si è verificato un errore. Per favore, riprova più tardi.');
        });
  });
});