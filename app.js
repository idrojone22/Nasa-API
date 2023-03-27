window.addEventListener('load',obtenerDatos());

function obtenerDatos() {

    const Nasa_key = "kNRo5GabnC1HKsHCG6okJksRm5ayAdaxteYKgnFo";
    // const ruta = "https://api.nasa.gov/planetary/apod?api_hey=iC31i5mH5xdukxvPdRkJDX9kMwGuxeEM6JttYxyY"
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`;
    // const ruta = "https://api.nasa.gov/planetary/apod?api_key=kNRo5GabnC1HKsHCG6okJksRm5ayAdaxteYKgnFo"

    fetch(ruta) 
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado)) 
    
}

function mostrarDatos(resultado) {

    console.log(resultado)
    
    // const titulo = document.querySelector('#titulo');
    titulo.innerHTML = resultado.title;
    // const fecha = document.querySelector('#fecha');
    fecha.innerHTML = resultado.date;
    // const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = resultado.explanation;
    const multimedia = document.querySelector('#c_multimedia');

    if (resultado.media_type == "video") {
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${resultado.url}"></iframe>`
        console.log('Hola1')
    } else {
        multimedia.innerHTML = `<img src="${resultado.url}" class="img-thumbnail" alt="${resultado.url}">`
        console.log('Hola2')
    }
    console.log('Hola3')
}
