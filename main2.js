
// // La tarea consiste en seleccionar todos los span, iterar sobre ellos y asignarle cada uno de los colores del array tal que las letras formen el arcoiris.
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors);
// const container = document.getElementById('container-span');
// const spans = document.querySelectorAll('span');

// spans.forEach(function (span, index) {
//   span.style.color = colors[index];
//   span.style.fontSize = '2rem';
//   span.style.fontWeight = 'bold';
//   span.style.fontFamily = 'roboto';
//   span.style.cursor = 'pointer';
//   span.style.getPropertyPriority = 'red';
//   console.log(span);
// });


// Los factoriales se utilizan a menudo en probabilidad y se utilizan como problema introductorio para construcciones de bucles. En este kata sumarás múltiples factoriales.

// A continuación se muestran algunos ejemplos de factoriales:

// 4! = 4 * 3 * 2 * 1 = 24
// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// Aquí hay un ejemplo de un sumatorio de factoriales:
// function sumFactorial(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let factorial = 1;
//     for (let j = arr[i]; j > 0; j--) {
//       factorial *= j;
//     }
//     sum += factorial;
//   }
//   return sum;
// }
// console.log(sumFactorial([4, 6]));


const form = document.querySelector('form');
form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    console.log(Event.target);
    const input = Event.target.querySelector('input');
    console.log(input.value);
});
// guardar las respuestas del usuario a nuestro formulario
form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const user = {
        name: Event.target.name.value,
        age: Event.target.age.value,
    }
    console.log(user);
});

const printHello = () => console.log('hello');
Button.addEventListener('click', printHello);

const sayHello = () => console.log('hello');
