document.addEventListener('DOMContentLoaded', () => {
    const contactContainer = document.getElementById('contact-container');

    // Cargar contenido del archivo contacto.html
    fetch('/contacto.html') // Ajusta la ruta según tu estructura de carpetas
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la sección de contacto.');
            }
            return response.text();
        })
        .then(html => {
            contactContainer.innerHTML = html;

            // Agregar evento al formulario después de que se cargue dinámicamente
            const contactForm = document.getElementById("contact-form");
            if (contactForm) {
                contactForm.addEventListener("submit", function (event) {
                    event.preventDefault();

                    const nombre = document.getElementById("name").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const telefono = document.getElementById("phone").value.trim();
                    const mensaje = document.getElementById("message").value.trim();

                    if (!nombre || !email || !mensaje) {
                        alert("Por favor, completa todos los campos requeridos.");
                        return;
                    }

                    // Enviar los datos al endpoint de Firebase Functions
                    fetch("https://us-central1-cv-hector-venero-2.cloudfunctions.net/sendEmail", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ nombre, email, telefono, mensaje }),
                    })
                        .then((response) => {
                            if (response.ok) {
                                alert("Mensaje enviado correctamente");
                            } else {
                                alert("Error al enviar el mensaje");
                            }
                        })
                        .catch((error) => {
                            console.error("Error en la solicitud:", error);
                            alert("Error al enviar el mensaje");
                        });
                });
            }
        })
        .catch(error => {
            console.error("Error al cargar la sección de contacto:", error);
        });
});
