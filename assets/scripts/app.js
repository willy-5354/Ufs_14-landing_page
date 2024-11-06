document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        // Validazione dei campi
        const name = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            alert('Per favore, compila tutti i campi richiesti.');
            e.preventDefault(); // Blocca l'invio se i campi non sono validi
            return;
        }

        // Validazione dell'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Per favore, inserisci un indirizzo email valido.');
            e.preventDefault(); // Blocca l'invio se l'email non è valida
            return;
        }

        // Se i dati sono validi, il modulo verrà inviato normalmente
        // Il reindirizzamento manuale può essere rimosso se non necessario
    });
});;
