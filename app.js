window.addEventListener('load',obtenerDatos());

function obtenerDatos() {
    const Nasa_key = "kNRo5GabnC1HKsHCG6okJksRm5ayAdaxteYKgnFo";
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;
    fetch(ruta) 
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado)) 
}

function mostrarDatos({title, date, explanation, url, media_type}) {
    titulo.innerHTML = title;
    fecha.innerHTML = date;
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector('#c_multimedia');

    if (media_type == "video") {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-thumbnail" alt="${url}">`
    }
}