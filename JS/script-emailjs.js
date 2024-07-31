/*

MIT License

Copyright (c) 2024 Alessio Salome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

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