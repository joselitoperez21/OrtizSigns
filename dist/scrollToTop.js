function scrollToTop() {
    // Obtén el elemento del cuerpo (body) o el elemento raíz del documento (documentElement)
    var body = document.body;
    var docElem = document.documentElement;
    // Desplázate hacia la parte superior con animación suave
    // La propiedad scrollTop se establece en 0 para desplazar la página hacia arriba
    body.scrollTop = 0;
    docElem.scrollTop = 0;
} 
  // Ejemplo de cómo llamar a la función cuando se hace clic en un botón
  // Puedes activar la función en respuesta a cualquier evento que desees
var scrollToTopButton = document.getElementById('scrollToTopButton');

  // Si tienes un botón con el ID "scrollToTopButton", puedes agregar un escuchador de eventos para llamar a la función
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
}
