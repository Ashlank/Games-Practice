

// Solicitud de datos de la API  con fetch (prueba) 

fetch("https://api.rawg.io/api/games?key=6a93726f4bd64b22bf9cf5bb08cb0f7f")
    .then(response => response.json()) // Convertir la respuesta a JSON transformando la respuesta en un objeto luego de que llegue la respuesta 
    .then(data => console.log(data.results)) // Imprimir los datos en consola para verificar que funcione correctamente ( status:ok) 
