
const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    }
];

// Función que devuelve un arreglo con los títulos de los libros
//Esto lo hace mapeando 
function getTheTitles(books) {
    return books.map(book => book.title);
}

// Función para imprimir los títulos en la consola
//Podira poner un console.log(getTheTtitles(books)) pero al hacerlo asi luego lo puedo asignar al boton
function printTitles() {
    const titles = getTheTitles(books);
    console.log(titles);
}

document.getElementById("getTitlesButton").addEventListener("click", printTitles);
