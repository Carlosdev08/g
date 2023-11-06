const container = document.getElementById('button-container')
for (let i = 0; i <= 500; i++) {
const button = document.createElement('button')
button.textContent = i;
button.style.backgroundColor = i % 2 === 0 ? 'red' : 'blue';

if (i % 5 === 0) {
    button.style.backgroundColor = 'green';
}   
container.appendChild(button);
}
// Una vez hayas creado los botones, da a cada quinto botón un color de texto verde.
// ahora tenemmos que centrar los botones
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';
container.style.width = '100vw';
container.style.backgroundColor = '#000458c7';
container.style.color = 'white';
container.style.fontSize = '2rem';
container.style.fontWeight = 'bold';
container.style.textAlign = 'center';
container.style.fontFamily = 'roboto';
container.style.cursor = 'pointer';
container.style.getPropertyPriority = 'red';
console.log(container.button);


