function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error al cargar ${filePath}:`, error));
}

// Llamadas a la función para cargar el header y footer
loadHTML('header-placeholder', './header.html');
loadHTML('footer-placeholder', './footer.html');
