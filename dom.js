const h1 = document.querySelector("h1");
console.log(h1.innerText);

//cambia el nombre del h1 que esta en el body
h1.innerText = "GammaTech Challenges";
console.log(h1.innerText);

// cambia el color del span que esta en el h1
// const span = document.querySelector("span");
// span.style.color = "red";
// console.log(span.style.color);

//cambia el nombre al h2 que esta en el body
const h2 = document.querySelector("h2");
h2.style = 'display: flex';
h2.style = 'flex-direction: column';
h2.style = 'justify-content: center';
h2.innerText = "Frontend Challenge";
console.log(h2.innerText);


//centrar los elementos de la lista del index

const orderlist = document.getElementById('orderlist');
orderlist.style = "text-align: center";
orderlist.style = 'display: flex';
orderlist.style = 'flex-direction: column';
orderlist.style = 'justify-content: center';
orderlist.style = 'align-items: center';




const getRandomColor = function (color1 = 255, color2 = 255, color3 = 255) {
  const color = `rgb(${Math.floor(Math.random() * color1)}, ${Math.floor(
    Math.random() * color2
  )}, ${Math.floor(Math.random() * color3)})`;
  return color;
}

// Función para cambiar el color del texto con el año

const setIntervalColor = function () {
  h1.style.color = getRandomColor();
};1000;
//cmo quitarle los pntos a la lista
const list = document.querySelector("ul");
list.style.listStyle = "none";
console.log(list.style.listStyle);

//cambiar el color de fondo del body
document.body.style.backgroundColor = getRandomColor();
console.log(document.body.style.backgroundColor);

//cambia el color de las letras de h1 y h2
h1.style.color = getRandomColor(color1 = 125, color2 = 153, color3 = 255);
h2.style.color = getRandomColor(color1 = 25, color2 = 23, color3 = 0);
console.log(h1.style.color);
console.log(h2.style.color);





//funcion para incluir el año actual junto a la hora en curso
const date = new Date();
const year = date.getFullYear();
const time = date.toLocaleTimeString().split("")[0];
h1.innerText = `Gamma Tech Challenge - ${year} ${time}`;
console.log(h1.innerText);


// Función para actualizar la hora

function updateDateTime() {
  // Crea una nueva instancia de la fecha

  const now = new Date();
  const timeString = now.toLocaleTimeString().split(" ")[0];
  // Obtiene el año actual 


  // // Obtiene la hora actual
  // const hours = now.getHours();

  // // Obtiene los minutos actuales
  // const minutes = now.getMinutes();

  // Selecciona el elemento h2 para la hora
  const h2 = document.querySelector("h2");
  // el titulo del h2


     
  // Actualiza el texto con la hora actual debajo del título
     
  h2.textContent = "Frontend - " + timeString;
  // Cambia el color de fondo del cuerpo del documento
  document.body.style.backgroundColor = getRandomColor("green" ,"blue");
}

// Establece un intervalo para actualizar la hora cada segundo
setInterval(updateDateTime, 1000);


  // Establece el color de fondo de los elementos li basado en su estado


  const  challengeItems = document.querySelectorAll('ul li');
  challengeItems.forEach(function (item) {
    if (item.textContent.includes('Done')) {
      item.style.backgroundColor = 'green';
    } else if (item.textContent.includes('Ongoing')) {
      item.style.backgroundColor = 'yellow';
    } else if (item.textContent.includes('Coming')) {
      item.style.backgroundColor = 'red';
    }
  });
