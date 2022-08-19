/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// crear (1) imagen
// agregar #imagen

/* 
<div class="p-4">
  <img class="mx-auto" width="320" src="https://randomfox.ca/images/2.jpg" alt=""></div>
</div> 
*/

import { registrarImagen } from './lazy'

const min = 1;
const max = 122;

const numeroRandom = ()=> {
  return Math.floor(Math.random() * (max - min) ) + min
}


const crearNodoImagen = ()=> {
  const URLDeLaImagen = `https://randomfox.ca/images/${numeroRandom()}.jpg`;

  const contenedor = document.createElement('div');
  contenedor.className = 'p-4';

  const imagen = document.createElement('img');
  imagen.className = 'mx-auto';
  imagen.width = '320';
  imagen.dataset.src = URLDeLaImagen;

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "bg-gray-300 load";
  imageWrapper.style.minHeight = "200px";
  imageWrapper.style.minWidth = "200px";
  imageWrapper.style.display = "inline-block";

  imageWrapper.appendChild(imagen);
  contenedor.appendChild(imageWrapper);

  return contenedor
}

const nodoDeMontaje = document.getElementById('images');
const addButton = document.getElementById('addBtn');
const cleanButton = document.getElementById('cleanBtn');

const aniadirImagen = ()=> {
  const nuevaImagen = crearNodoImagen();
  nodoDeMontaje.append(nuevaImagen);
  registrarImagen(nuevaImagen);
}

const limpiarImagenes = ()=> {
  [...nodoDeMontaje.childNodes].forEach(child => {
    child.remove();
  })
  
}

addButton.addEventListener('click', aniadirImagen) 
cleanButton.addEventListener('click',limpiarImagenes)
