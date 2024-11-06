document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Raccolta dati del form
        const formData = {
            name: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            campaign_token: form.querySelector('[name="campaign_token"]').value
        };

        try {
            // Validazione base
            if (!validateForm(formData)) {
                return;
            }

            // Simulazione invio a GetResponse
            const response = await submitToGetResponse(formData);
            
            if (response.success) {
                showSuccessMessage();
                form.reset();
            } else {
                showErrorMessage();
            }
        } catch (error) {
            console.error('Errore durante l\'invio:', error);
            showErrorMessage();
        }
    });
});

// Funzione di validazione
function validateForm(data) {
    if (!data.name || !data.email) {
        alert('Per favore, compila tutti i campi richiesti.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Per favore, inserisci un indirizzo email valido.');
        return false;
    }

    return true;
}

// Funzione per l'invio a GetResponse
async function submitToGetResponse(data) {
    // Simulazione di una chiamata API a GetResponse
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
}

// Funzione per mostrare il messaggio di successo
function showSuccessMessage() {
    alert('Modulo inviato con successo!')
}

// Funzione per mostrare il messaggio di errore
function showErrorMessage() {
    alert('Si è verificato un errore durante l\'invio. Per favore, riprova più tardi.');
}
