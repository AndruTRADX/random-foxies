const isIntersecting = entrada => {
  return entrada.isIntersecting
}

const cargar = entrada => {
  const contenedor = entrada.target;
  const imagen = contenedor.querySelector('img');
  const url = imagen.dataset.src
  imagen.src = url; 

  observer.unobserve(contenedor);
}

const observer = new IntersectionObserver( entradas => {
  entradas
    .filter(isIntersecting).forEach(cargar)
})

export const registrarImagen = imagen => {
  observer.observe(imagen)
}
